import React, { useState } from "react";

function TextForm({ title, heading, mode, showAlert }) {
  const [text_value, setText_value] = useState("");
  const [btn_hide, setBtn_hide] = useState("disabled");
  // ===========================

  let fixed_num = 0.008 * text_value.length; // this is method to show how much minutes to read para
  const handleTextChange = (e) => {
    // this function get text value in textarea
    setText_value(e.target.value);
    e.target.value === "" ? btn_hide : setBtn_hide("enabled");
  };

  //   -----------------------------

  const handelUppercase = () => {
    // this function text changes to uppercase
    setText_value(text_value.toUpperCase());
    showAlert("Convert to UpperCase", "success");
  };

  //   -----------------------------

  const handelLowercase = () => {
    // this function text changes to lowercase
    setText_value(text_value.toLowerCase());
    showAlert("Convert to LowerCase", "success");
  };

  //   -----------------------------

  const handelCapitalize = () => {
    // this function text changes to Capitalize
    setText_value(
      text_value.charAt(0).toUpperCase() + text_value.slice(1).toLowerCase()
    );
    showAlert("Convert to Capitalize", "success");
  };

  //   -----------------------------

  const handelClear_text = () => {
    // this function clear all text in textarea
    setText_value("");
    setBtn_hide("disabled");
    showAlert("Clear All Text", "success");
  };
  //   -----------------------------

  const handelClear_space = () => {
    // this function clear all text space in textarea
    const newText = text_value.split(/[ ]+/);
    setText_value(newText.join(" "));
    showAlert("Clear extra space", "success");
  };

  //   -----------------------------

  const handelCopy_text = () => {
    // this function copy all text in textarea
    navigator.clipboard.writeText(text_value);
    setText_value(text_value);
    showAlert("Copy All Text", "success");
  };

  //   -----------------------------

  const handelDownload_text = () => {
    // this function download all text in textarea
    const text_blob = new Blob([text_value]);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(text_blob);
    link.download = new Date().getTime();
    link.click();
    showAlert("Download Text", "success");
  };

  //   -----------------------------

  return (
    <>
      <div
        className="container"
        style={{
          color: mode === "light" ? "black" : "white",
        }}
      >
        <h1>{heading}</h1>
        <div className="mb-3">
          <label htmlFor="myText" className="form-label">
            {title}
          </label>
          <textarea
            className="form-control"
            id="myText"
            rows="8"
            onChange={handleTextChange}
            value={text_value}
            style={{
              background: mode === "light" ? "white" : "#443155",
              color: mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>

        <button
          className={`btn btn-primary mx-2 ${btn_hide}`}
          onClick={handelUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-primary mx-2 ${btn_hide}`}
          onClick={handelLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-primary mx-2 ${btn_hide}`}
          onClick={handelCapitalize}
        >
          Convert to Capitalize
        </button>
        <button
          className={`btn btn-primary mx-2 ${btn_hide}`}
          onClick={handelClear_text}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-primary mx-2 ${btn_hide}`}
          onClick={handelCopy_text}
        >
          Copy Text
        </button>
        {
          <button
            className={`btn btn-primary mx-2 ${btn_hide}`}
            onClick={handelClear_space}
          >
            Clear extra space
          </button>
        }
        <button
          className={`btn btn-primary mx-2 my-3 ${btn_hide}`}
          onClick={handelDownload_text}
        >
          Download Text
        </button>
      </div>
      <div
        className="container"
        style={{
          color: mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summery</h2>
        <p>
          <b>
            {
              text_value.split(/\s+/).filter((element) => {
                return element !== "";
              }).length
            }
          </b>{" "}
          Words and <b>{text_value.length} </b>
          characters
        </p>
        <p>{fixed_num.toFixed(0)} Minutes Read</p>
        <h2>Preview</h2>
        <p style={{ wordBreak: "break-word" }}>
          {text_value.length > 0
            ? text_value
            : "Enter something in the textarea above to preview it here"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
