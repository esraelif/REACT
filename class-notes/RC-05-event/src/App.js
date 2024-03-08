import "./App.css";

import React from "react";
// import Event from "./event/Event";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./hooks/Hooks";
import Counter from "./classComponents/Counter";
import Form from "./form/Form";
import FormObject from "./form/FormObject";
import MouseKeyboard from "./mouse-keyboard/MouseKeyBoard";

function App() {
  return (
    <div>
      {/* 
      <Event /> */}
      {/* <Hooks /> */}
      {/* <Counter /> */}
      {/* <Counter count={20} /> */}
      {/* <Form /> */}
      {/* <FormObject /> */}
      <MouseKeyboard />
    </div>
  );
}

export default App;
