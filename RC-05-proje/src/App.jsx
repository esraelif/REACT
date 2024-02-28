// import React, { useState } from 'react';
// import './App.css';

// import { FaCar } from "react-icons/fa";
// import { FaHandPointUp } from "react-icons/fa";

// import { BiSolidHandDown } from "react-icons/bi";
// function App() {

//   const [carRotation, setCarRotation] = useState(0);
//   const [backgroundColor, setBackgroundColor] = useState('#a9a9a9');
//   const [carMovingDirection, setCarMovingDirection] = useState('');





//   const handleUpClick = () => {
//     setCarRotation(carRotation + 180);
//     console.log(carRotation);
//     document.querySelector(".car").className = "car";
//     // Arabayı 0 derece yukarı döndür
//     setBackgroundColor('#00ffff'); // Yukarı butonuna basıldığında arka plan rengini yeşil yap
//   };





//   const handleDownClick = () => {
//     setCarRotation(carRotation + 180);
//     console.log(carRotation);
//     // Arabayı 180 derece aşağı döndür
//     setBackgroundColor('#8a2be2'); // Aşağı butonuna basıldığında arka plan rengini mor yap
//   };




//   const handleKeyDown = (event) => {
//     // const moveDistance = 10; // Klavye tuşlarına basıldığında arabanın hareket edeceği mesafe
//     if (event.key === 'ArrowLeft') {
//       // setCarPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x - moveDistance }));
//       // setCarRotation(90); // Arabayı sola döndür
//       setCarMovingDirection('move-left'); // Sola doğru animasyon sınıfını ekle
//       console.log(carMovingDirection)
//       setBackgroundColor('#00ff12'); // Arka plan rengini yeşil yap
//     } else if (event.key === 'ArrowRight') {
//       // setCarPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + moveDistance }));
//       // setCarRotation(-90); // Arabayı sağa döndür
//       setCarMovingDirection('move-right'); // Sağa doğru animasyon sınıfını ekle
//       setBackgroundColor('#8a2b12'); // Arka plan rengini mor yap
//     }
//   };


//   return (
//     <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
//       <div className="top-icon" onClick={handleUpClick}>
//         <FaHandPointUp style={{ fontSize: "64px" }} />
//       </div>

//       <div className="car-container">
//         <div
//           className={`car ${carMovingDirection}`}
//           style={{
//             transform: `rotate(${carRotation}deg)`,
//             backgroundColor: backgroundColor,
//             border: "1px solid red",
//           }}
//         >
//           <FaCar style={{ fontSize: "64px" }} />
//         </div>
//       </div>

//       <div className="bottom-icon" onClick={handleDownClick}>
//         <BiSolidHandDown style={{ fontSize: "64px" }} />
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';

import { FaCar } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa";
import { BiSolidHandDown } from "react-icons/bi";

function App() {
  const [carRotation, setCarRotation] = useState(0);
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0 });
  const [backgroundColor, setBackgroundColor] = useState('#a9a9a9');

  const handleUpClick = () => {
    setCarRotation(180); // Yukarı hareket ettiğinde araba saat yönünde 180 derece döner
    setBackgroundColor('#00ffff');
  };

  const handleDownClick = () => {
    setCarRotation(0); // Aşağı hareket ettiğinde araba saat yönünün tersine 0 derece döner
    setBackgroundColor('#8a2be2');
  };

  const handleKeyDown = (event) => {
    const moveDistance = 200; // Her bir tuşa basıldığında arabanın ilerleyeceği mesafe

    if (event.key === 'ArrowLeft') {
      // Sol tuşa basıldığında araba 200px sola hareket eder
      setCarPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x - moveDistance }));
      setBackgroundColor('#00ff12'); // Arka plan rengini yeşil yap
    } else if (event.key === 'ArrowRight') {
      // Sağ tuşa basıldığında araba 200px sağa hareket eder
      setCarPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + moveDistance }));
      setBackgroundColor('#8a2b12'); // Arka plan rengini mor yap
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
      <div className="top-icon" onClick={handleUpClick}>
        <FaHandPointUp style={{ fontSize: "64px" }} />
      </div>

      <div className="car-container">
        <div
          className="car"
          style={{
            transform: `translate(${carPosition.x}px, ${carPosition.y}px) rotate(${carRotation}deg)`,
            backgroundColor: backgroundColor,
            border: "1px solid red",
          }}
        >
          <FaCar style={{ fontSize: "64px" }} />
        </div>
      </div>

      <div className="bottom-icon" onClick={handleDownClick}>
        <BiSolidHandDown style={{ fontSize: "64px" }} />
      </div>
    </div>
  );
}

export default App;


