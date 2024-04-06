import { useEffect } from "react"

import GosterUsers from "./pages/GosterUsers"
import { KullanıcıContext } from "./context/KullaniciContext";
import { useState } from "react";


const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])


  const changeWidth = (id, size) => {
    setUsers(users.map((a) => a.id === id ? { ...a, width: size } : a))

  }





  return (
    <KullanıcıContext.Provider value={{ users, changeWidth }}>
      <GosterUsers />
    </KullanıcıContext.Provider>
  );
}

export default App
