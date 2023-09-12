import React, { useState } from "react";

const Theme = () => {
  const [color, setColor] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );

  // ============================================

  if (color !== "light") {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  // ============================================

  const ChangeTheme = () => {
    if (color !== "light") {
      document.body.classList.remove("dark");
      setColor("light");
    } else {
      document.body.classList.add("dark");
      setColor("dark");
    }
  };

  console.log(localStorage.getItem("theme"));

  return (
    <>
      <button
        onClick={ChangeTheme}
        className={`btn btn-${color === "light" ? "dark" : "light"}`}
        style={{
          position: "absolute",
          zIndex: "9999",
          right: "0",
          top: "0rem",
        }}
      >
        {color === "light" ? "Dark" : "Light"}
      </button>
    </>
  );
};

export default Theme;
