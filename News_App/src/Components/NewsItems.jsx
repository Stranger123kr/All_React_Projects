import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Blurhash } from "react-blurhash";

function NewsItems({
  title,
  description,
  Url,
  read_more,
  date,
  author,
  source,
}) {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <>
      <div className="my-5">
        <div className="card">
          <img src={Url} alt="news_images" onLoad={() => setLoaded(true)} />
          {!isLoaded && (
            <Blurhash
              hash={"LKO2:N%2Tw=w]~RBVZRi};RPxuwH"}
              width={355}
              height={200}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span
              className="badge bg-dark text-light my-3"
              style={{ fontSize: "0.9rem" }}
            ></span>
            <span
              className="badge bg-dark"
              style={{
                top: 0,
                fontSize: "0.8rem",
                zIndex: "10",
                position: "absolute",
                right: 0,
              }}
            >
              {source}
            </span>
            <hr />
            <p className="card-text" style={{ fontSize: "1rem" }}>
              {description}
            </p>
            <hr />
            <p className="card-text">
              By <strong style={{ color: "#000" }}>{author}</strong> on
              {new Date(date).toGMTString()}
            </p>
            <Link
              to={read_more}
              className="btn btn-sm btn-primary"
              target="_blank"
            >
              For More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItems;
