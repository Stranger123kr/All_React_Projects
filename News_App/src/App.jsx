import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import "./App.css";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  let page_no = 15;

  let api_key = import.meta.env.VITE_SOME_KEY;

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <LoadingBar color="yellow" height="3px" progress={progress} />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                page_no={page_no}
                category="general"
                api_key={api_key}
              />
            }
          />

          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                page_no={page_no}
                category="general"
                api_key={api_key}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                page_no={page_no}
                category="business"
                api_key={api_key}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                page_no={page_no}
                category="entertainment"
                api_key={api_key}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                page_no={page_no}
                category="health"
                api_key={api_key}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                page_no={page_no}
                category="science"
                api_key={api_key}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                page_no={page_no}
                category="sports"
                api_key={api_key}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                page_no={page_no}
                category="technology"
                api_key={api_key}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
