import React from "react";
import "./loading_spinner.css";

function Loading_spinner({ loaderRef }) {
  //const loaderRef = useRef(""); // this is a useRef hook for dom manipulation

  return (
    <>
      <div className="lds-roller" ref={loaderRef}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  );
}

export default Loading_spinner;
