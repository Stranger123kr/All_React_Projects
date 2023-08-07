import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ title, mode, toggleMode, toggle_button, showAlert }) {
  const change_color = (e) => {
    const color = e.target.id;
    if (color === "red") {
      document.body.style.backgroundColor = "red";
      showAlert("Background Color has Red", "success");
    } else if (color === "green") {
      document.body.style.backgroundColor = "green";
      showAlert("Background Color has Green", "success");
    } else {
      document.body.style.backgroundColor = "hotpink";
      showAlert("Background Color has Hoppink", "success");
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="color_palets">
            <span className="colors" id="red" onClick={change_color}></span>
            <span className="colors" id="green" onClick={change_color}></span>
            <span className="colors" id="hotpink" onClick={change_color}></span>
          </div>

          <div
            onClick={toggleMode}
            className={`toggle_btn form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <span onClick={toggleMode} ref={toggle_button}></span>
            <strong className="mode">
              Enable {mode === "light" ? "Dark" : "Light"} Mode
            </strong>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
