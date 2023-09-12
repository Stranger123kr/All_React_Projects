import React from "react";
import Stories from "./Components/Stories";
import Search from "./Components/Search";
import Pagination from "./Components/Pagination";
import Theme from "./Components/Theme";

import "./App.css";

const App = () => {
  return (
    <>
      <Theme />
      <h1 id="heading">Tech News Through trustiest source</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
