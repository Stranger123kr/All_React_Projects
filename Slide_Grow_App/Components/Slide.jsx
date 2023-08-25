import React from "react";

const Slide = ({ range, handleInput, color }) => {
  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          onInput={handleInput}
          value={range}
        />
        <div className="circle">
          <span
            style={{
              width: `${range * 3}px`,
              height: `${range * 3}px`,
              background: `${color}`,
            }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Slide;
