import React, { useState } from "react";

const App = () => {
  const [random_color, setRandomColor] = useState("");

  const Background_color = (e) => {
    const h1 = document.querySelector("h1");
    console.log(h1);
    document.documentElement.style.background = getRandom();
    e.target.style.background = random_color;
    h1.style.color = random_color;
  };

  // this is a first method to generate random colors

  const getRandom = () => {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor("#" + random);
    console.log(random);
    return `#${random}`;
  };

  // ----------------------------------------------------

  // this is a second method to generate random colors

  // const getRandom = () => {
  //   let letters = "123456789ABCDEF";
  //   let Color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     Color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   setRandomColor(Color);
  //   return Color;
  // };

  return (
    <>
      <div className="container">
        <h1>Random Background Color changer {random_color}</h1>
        <button className="btn" onClick={Background_color}>
          Click
        </button>
      </div>
    </>
  );
};

export default App;
