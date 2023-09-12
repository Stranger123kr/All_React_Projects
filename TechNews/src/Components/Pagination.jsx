import React from "react";
import "./CssFile/Pagination.css";
import { useGlobal } from "./Context";

const Pagination = () => {
  const { page, nbPages, MorePage } = useGlobal();

  return (
    <>
      <div className="btn">
        <button
          type="button"
          className="btn  btn-dark btn-lg"
          disabled={page <= 0}
          onClick={() => MorePage(-1)}
        >
          Prev
        </button>
        <span>
          {page + 1} of {nbPages}
        </span>
        <button
          type="button"
          className="btn  btn-dark btn-lg"
          disabled={page >= nbPages}
          onClick={() => MorePage(+1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
