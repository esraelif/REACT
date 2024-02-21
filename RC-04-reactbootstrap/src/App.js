import "./App.css";

import React from "react";

/* The following line can be included in our src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css'

import dataA from "./data"
import CourseCard from "./components/CourseCard";

function App() {

  return (
    <div>

      <CourseCard veri={dataA} />
    </div>
  );
}

export default App;
