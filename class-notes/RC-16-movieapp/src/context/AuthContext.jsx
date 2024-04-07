import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/toastNotify";

//! create context
export const AuthContext = createContext();

//? context provider

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || "");
    const navigate = useNavigate();

    const register = async (email, password, displayName) => {
        try {
            //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            //? kullanıcı profilini güncellemek için kullanılan firebase metodu
            await updateProfile(auth.currentUser, {
                displayName: displayName,
            });
            navigate("/");
            toastSuccessNotify("Registered!");
            console.log(userCredential);
        } catch (error) {
            console.log(error);
            toastErrorNotify(error.message);
        }
    };
    //* https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Email/password
    //! Email/password ile girişi enable yap
    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
            toastSuccessNotify("Logged in!");
        } catch (error) {
            toastErrorNotify(error.message);
        }
    };
    const logout = () => {
        //*https://firebase.google.com/docs/auth/web/password-auth#next_steps
        signOut(auth); //! sadece signOut metodunu çağırmamız yeterli
        toastSuccessNotify("Logged out!");
    };

    //* https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Google
    //! Google ile girişi enable yap
    //* => Authentication => settings => Authorized domains => add domain
    //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
    const signGoogleProvider = async () => {
        try {
            //? Google ile giriş yapılması için kullanılan firebase metodu
            const provider = new GoogleAuthProvider();
            //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
            await signInWithPopup(auth, provider);
            navigate("/");
            toastSuccessNotify("Logged in!")
        } catch (error) {
            console.log(error);
            toastErrorNotify(error.message)
        }
    };

    const forgotPassword = (email) => {
        //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                toastWarnNotify("Please check your mail box!");
                // alert("Please check your mail box!");
            })
            .catch((err) => {
                toastErrorNotify(err.message);
                // alert(err.message);
                // ..
            });
    };


    const userObserver = () => {
        //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log(user);
                const { email, displayName, photoURL } = user;
                console.log(user.displayName);
                setCurrentUser({ email, displayName, photoURL });
                localStorage.setItem("user", JSON.stringify({ email, displayName, photoURL })) //* user bilgisinin refresh de kaybolmaması için locale kaydettik
            } else {
                // User is signed out
                // ...
                setCurrentUser(false);
                localStorage.removeItem("user")
            }
        });
    };

    console.log(currentUser);
    useEffect(() => {
        userObserver(); //* Kullanıcı giriş çıkışlarını takip ettirmesi için userObserverı tetikliyoruz
    }, []);



    return (
        <AuthContext.Provider
            value={{ currentUser, register, login, logout, signGoogleProvider, forgotPassword }}
        >
            {children}
        </AuthContext.Provider>
    );
};

//! zorunlu değil kullanım kolaylığı olması nedeniyle yazılabilir. İlgili yerlerde importları azaltıyor.
//* consumer with custom hook
export const useAuthContext = () => {
    return useContext(AuthContext);
};

export default AuthContextProvider;
