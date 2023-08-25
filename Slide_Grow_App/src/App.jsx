import React, { useState } from "react";
import Slide from "../Components/Slide";

function App() {
  const [range, setRange] = useState(0);

  // color change logic

  let color = "";

  if (range > 30 && range < 70) {
    color = "red";
  } else if (range > 70) {
    color = "yellow";
  } else {
    color = "black";
  }

  // range function

  const handleInput = (e) => {
    console.log(e.target.value);
    setRange(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>Slide To Grow App</h1>
        <Slide range={range} handleInput={handleInput} color={color} />
      </div>
    </>
  );
}

export default App;
