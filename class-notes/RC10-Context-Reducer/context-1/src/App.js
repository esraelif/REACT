import { createContext, useState } from "react";
import data from "./data";
import Home from "./components/Home";

//!1- context alanı acıyoruz
export const StudentContext = createContext()

const App = () => {
  const [students, setStudents] = useState(data)

  const changeColor = (newRenk, id) => {
    setStudents(students.map((a) => a.id === id ? { ...a, color: newRenk } : a))

  }
  return (
    //!2- Bütün projeye gönderilmek üzere ilk Home'u gönderilecek elemanlar ile sarmallayalım. 
    <StudentContext.Provider value={{ students }}>

      <Home />
    </StudentContext.Provider>



  );
};

export default App;
