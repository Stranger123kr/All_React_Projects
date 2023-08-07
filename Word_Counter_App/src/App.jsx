import "./App.css";
import Resume from "./Components/Resume";
import Resume_data from "./Data/Resume_data";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import Contact from "./Components/Contact";

import React, { useState, useEffect, useRef } from "react";

// ----------------------------------------

// this is react router dom

import { BrowserRouter, Route, Routes } from "react-router-dom";

// ----------------------------------------

function App() {
  // ----------------------------------------
  const [mode, setMode] = useState("light"); // this is for theme settings

  const [alert, setAlert] = useState(null); // this is for theme settings

  const toggle_button = useRef(null);

  // ----------------------------------------

  // ----------------------------------------

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // ----------------------------------------

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      localStorage.setItem("theme", "dark");
      showAlert("Dark mode has been enabled", "success");
      toggle_button.current.classList.add("dark_on");
      document.title = "TextUtils_Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      localStorage.setItem("theme", "light");
      showAlert("Light mode has been enabled", "success");
      toggle_button.current.classList.remove("dark_on");
      document.title = "TextUtils_Light Mode";
    }
  };

  // ----------------------------------------
  // localStorage method

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      toggle_button.current.classList.add("dark_on");
    } else if (localStorage.getItem("theme") === "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      toggle_button.current.classList.remove("dark_on");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  // ----------------------------------------

  return (
    <>
      <BrowserRouter>
        {/* ---------------------------------------------------------------- */}

        {/* these are the part of routing */}

        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggle_button={toggle_button}
          showAlert={showAlert}
        ></Navbar>

        <Alert alert={alert} mode={mode}></Alert>

        {/* ------------------------------------------------------------------- */}

        {/* these are the part of routing */}
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  title="Enter Text and analyzed ! not button are disabled now write something then buttons enabled automatically"
                  heading="TextUtils"
                  mode={mode}
                  showAlert={showAlert}
                ></TextForm>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            {/* <Navbar title="donkey"></Navbar> */}
            {/* ================================== */}
            {/* <div classNameName="container">
      {Resume_data.map((data, index) => (
        <Resume
          key={index}
          skills={data.skills}
          experience={data.experience}
          education={data.education}
        ></Resume>
      ))}
    </div> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
