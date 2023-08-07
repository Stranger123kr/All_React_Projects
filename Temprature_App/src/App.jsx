import React, { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(0);

  const temperatureControl = (e) => {
    setTemperature(temperature + e);
  };
  console.log(temperature);

  return (
    <>
      <div className="container">
        <div
          className="card p-2 bg-light"
          style={{ width: "20rem", margin: "1rem auto" }}
        >
          <h1
            className={`card ${
              temperature < 25 ? "text-bg-primary" : "text-bg-danger"
            } `}
            style={{
              width: "19rem",
              textAlign: "center",
              height: "150px",
              border: "2px solid #666",
              fontSize: "5rem",
            }}
          >
            {temperature} ° C
          </h1>
          <div className="d-flex justify-content-between">
            <button
              className="btn m-2 btn-primary btn-lg"
              onClick={() => temperatureControl(-1)}
            >
              -
            </button>
            <button
              className="btn m-2 btn-primary btn-lg"
              onClick={() => temperatureControl(+1)}
            >
              +
            </button>
          </div>
        </div>

        {temperature > 35 ? (
          <h1 className="text-center">very Hot</h1>
        ) : temperature < 0 ? (
          <h1 className="text-center">very Cold</h1>
        ) : (
          <h1 className="text-center">Normal</h1>
        )}
      </div>
    </>
  );
}

export default App;
