import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import "./Dummy";
import Dummy from "./Dummy";
const App = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FetchData = async () => {
    fetch(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="App">
      <SkeletonTheme highlightColor="#e8ffd1">
        {isLoading ? (
          <>
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
          </>
        ) : (
          user.map((data, index) => (
            <div className="card" key={index}>
              <img
                src={`https://joesch.moe/api/v1/${data.first}`}
                alt="user img"
              />
              <h1>{data.first}</h1>
              <h2>{`${data.email}`.slice(0, 20)}</h2>
              <h3>{data.address}</h3>
            </div>
          ))
        )}
      </SkeletonTheme>
    </div>
  );
};

export default App;
