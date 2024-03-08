import { useState } from "react";

const FormObject = () => {

    const [person, setPerson] = useState({
        name: "",
        pass: "",
        email: "",
    })
    //dest
    const { name, pass, email } = person
    const handlePerson = (e) => {
        setPerson({ ...person, [e.target.id]: e.target.value })



    }
    const getDatabase = (e) => {
        e.preventDefault();
        alert(`name: ${name} email: ${email}`)
        setPerson({ name: "", pass: "", email: "" })

    };
    return (
        <div className="container text-center mt-4" >
            <h1>*********************************************</h1>

            <h1>FORM(EVENTS)</h1>

            <form onSubmit={getDatabase}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="isim">
                        NAME: <span className="text-danger">{name} </span>
                    </label>
                    <input
                        className="form-control"
                        id="isim"
                        type="text"
                        onInput={handlePerson}
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">
                        PASSWORD
                    </label>
                    <input
                        className="form-control"
                        id="password"
                        type="password"
                        onChange={handlePerson}
                        value={pass}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        EMAIL: <span className="fw-bold">{email}</span>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={handlePerson}
                        value={email}
                        id="email"
                        name="email"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    GÖNDER (submit)
                </button>
            </form>
        </div >
    );
};

export default FormObject;
