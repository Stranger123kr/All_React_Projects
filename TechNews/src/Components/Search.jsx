import React from "react";
import "./CssFile/Search.css";
import { useGlobal } from "./Context";
const Search = () => {
  const { InputValue, query } = useGlobal();

  return (
    <>
      <div className="InputValue">
        <form>
          <input
            type="text"
            autoComplete="off"
            // value={query}
            placeholder="Search"
            onChange={(Input) => InputValue(Input.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
