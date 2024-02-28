import "./App.css";

import React from "react";
// import Event from "./event/Event";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./hooks/Hooks";
import Counter from "./classComponents/Counter";
import Form from "./form/Form";

function App() {
  return (
    <div>
      {/* 
      <Event /> */}
      {/* <Hooks /> */}
      {/* <Counter /> */}
      {/* <Counter count={20} /> */}
      <Form />
    </div>
  );
}

export default App;
