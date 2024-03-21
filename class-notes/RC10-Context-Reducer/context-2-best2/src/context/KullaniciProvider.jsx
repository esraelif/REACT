import React, { createContext, useContext } from "react";


import { useEffect } from "react";
import { useState } from "react";


//! 1- Create Context yapıyoruz
export const KullanıcıContext = createContext();
//!Provider
const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])


  const changeWidth = (id, size) => {
    setUsers(users.map((a) => a.id === id ? { ...a, width: size } : a))

  }



  return (
    <KullanıcıContext.Provider value={{ users, changeWidth }}>
      {children}
    </KullanıcıContext.Provider>
  );
};
//! Consuming burada yaparsak ihtiyac duyan childlarda bir daha cagırmıyoruz.(Yeni yol)
export const useKullaniciCntx = () => {
  return useContext(KullanıcıContext)

}



export default KullaniciProvider;
