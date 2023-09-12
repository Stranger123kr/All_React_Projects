import React from "react";
import "../Css/CVItems.css";
import { useGlobalContext } from "./CvContext";

const CVItems = () => {
  const [MoreCandidateData, cvData, counter] = useGlobalContext();

  const res = cvData.filter((e) => e.Id === counter);

  const { Name, Age, City, Phone, Languages, FrameWork, Image, email } = res[0];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="image text-center my-2">
            <img src={Image} alt="image" />
          </div>
          <div className="profile">
            <ul className="list-group">
              <li className="list-group-item">
                <span>Name </span>: {Name}
              </li>
              <li className="list-group-item">
                <span>Age </span>: {Age}
              </li>
              <li className="list-group-item">
                <span>Email </span>: {email}
              </li>
              <li className="list-group-item">
                <span>City </span>: {City}
              </li>
              <li className="list-group-item">
                <span>Phone </span>: {Phone}
              </li>
              <li className="list-group-item">
                <span>Language </span>: {Languages}
              </li>
              <li className="list-group-item">
                <span>FrameWork </span>: {FrameWork}
              </li>
            </ul>
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary my-4"
              type="button"
              onClick={MoreCandidateData}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVItems;
