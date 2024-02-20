import React from "react";
//!localdeki src altındaki resimler bu şekilde import edilir
import resim2 from "../img/dunya-haritasi-min.jpg"

const Msg = () => {
  //!javascript alanı

  //! return ün altı react alanı (jsx alanı)
  return (
    <div>
      <h2>burası MSG sayfası</h2>

      <p> Hoşgeldin REACT</p>

{/* netten alınan resim yolu */}
      <img
        src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg"
        width="200px"
        alt=""
      />
      <img src={resim2} alt="" width="200px" />

  {/* public klasörüne eklenen resimler direk alttaki gibi kısa yol ile yazılabilir */}
      <img src="./assets/PngItem_415236.png" alt="" width="200px" />
    </div>
  );
};

export default Msg;
