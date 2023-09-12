import React, { useState } from "react";
import "../Css/Theme.css";
import { useThemeContext } from "./CvContext";

const Theme = () => {
  const { themeMode, ThemeChange } = useThemeContext();

  return (
    <>
      <button
        onClick={ThemeChange}
        className={`btn btn-${themeMode === "light" ? "dark" : "light"} theme`}
      >
        {themeMode === "light" ? "Dark " : "Light "}
        Mode
      </button>
    </>
  );
};

export default Theme;
