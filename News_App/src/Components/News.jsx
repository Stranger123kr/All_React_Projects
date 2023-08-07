import React, { useState, useEffect, useRef } from "react";
import NewsItems from "./NewsItems";
import Loading_spinner from "./loading_spinner";

function News({ page_no, category, setProgress, api_key }) {
  const [news, setNews] = useState([]);

  const [page, setPage] = useState(1);

  const [country, setCountry] = useState(
    localStorage.getItem("country") === null
      ? "in"
      : localStorage.getItem("country")
  );

  const [totalPage, setTotalPage] = useState(0);

  const loaderRef = useRef(""); // this is a useRef hook for dom manipulation
  const countryRef = useRef(""); // this is a useRef hook for dom manipulation

  const capitalize = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);

    // this is method of capitalize category to show in title
  };

  document.title = `${capitalize(category)}-Network News`;

  /* ------------------------------------------------- */

  const API = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_key}&page=1&pageSize=${page_no}`;

  const ApiCalling = async (url) => {
    try {
      setProgress(40);
      loaderRef.current.style.display = "block";
      const res = await fetch(url);
      const data = await res.json();
      setNews(data.articles);
      setTotalPage(data.totalResults);
      setProgress(100);
      loaderRef.current.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  };

  /* ------------------------------------------------- */

  useEffect(() => {
    ApiCalling(API);
    if (localStorage.getItem("country") === null) {
      countryRef.current.value = "in";
    } else {
      countryRef.current.value = country;
    }
  }, []);

  /* ------------------------------------------------- */

  /* this is a function for  next and previous button for navigation */

  const handleMore_page = async (num) => {
    try {
      setProgress(40);
      loaderRef.current.style.display = "block";
      setNews([]); // I cleaned the data for show loading a spinner properly on web when i will go to next or previous page
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_key}&page=${
          page + num
        }&pageSize=${page_no}`
      );
      const data = await res.json();
      setNews(data.articles);
      setPage(page + num);
      setProgress(100);
      loaderRef.current.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  };

  /* ---------------------------------------------------------------------------- */

  const country_name = async (country) => {
    try {
      loaderRef.current.style.display = "block";
      setPage(1);
      setNews([]); // I cleaned the data for show loading a spinner properly on web when i will go to next or previous page
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country.target.value}&category=${category}&apiKey=${api_key}&pageSize=${page_no}`
      );
      const data = await res.json();
      setCountry(country.target.value);
      localStorage.setItem("country", country.target.value);
      setNews(data.articles);
      loaderRef.current.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  };

  /* ---------------------------------------------------------------------------- */

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{ fontWeight: 400 }}>
          <strong>Network</strong> News - Top Headlines on{" "}
          {capitalize(category)}
        </h1>

        <div className="country_input">
          <select
            ref={countryRef}
            onChange={country_name}
            autoComplete="off"
            style={{ display: "block", margin: "0 0 0 auto" }}
          >
            <option value="in">India</option>
            <option value="us">United States</option>
            <option value="kr">South Korea</option>
            <option value="au">Australia</option>
            <option value="gb">United Kingdom</option>
          </select>
        </div>

        <div className="row my-1">
          {news.map((data, i) => (
            <div className="col-md-4">
              <NewsItems
                key={i}
                title={data.title ? data.title : "information not available"}
                description={
                  data.description
                    ? data.description.slice(0, 80)
                    : "information not available"
                }
                Url={
                  data.urlToImage
                    ? data.urlToImage
                    : (data.urlToImage =
                        "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000")
                }
                date={
                  data.publishedAt
                    ? data.publishedAt
                    : "information not available"
                }
                author={data.author ? data.author : "unknown Person"}
                source={
                  data.source.name ? data.source.name : "unknown source name"
                }
                read_more={data.url}
              ></NewsItems>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------- */}
        {/* this is a loading spinner it's display when page load */}

        <Loading_spinner loaderRef={loaderRef}></Loading_spinner>

        {/* ------------------------------------------------- */}
        {/* this is a next and previous button for navigation */}

        <div className="container my-3 d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            onClick={() => handleMore_page(-1)}
            className="btn  btn-dark"
          >
            Previous
          </button>

          <button
            disabled={page + 1 > Math.ceil(totalPage / page_no)}
            type="button"
            onClick={() => handleMore_page(+1)}
            className="btn  btn-dark"
          >
            Next
          </button>

          {/* --------------------------------------------------*/}
        </div>
      </div>
    </>
  );
}

export default News;
