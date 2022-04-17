import React from "react";
import NotFoundImg from "../../assets/notfound.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="center-div">
        <h1 className="lg-title">Page Not Found!</h1>
        <img src={NotFoundImg} alt="404" style={{ maxWidth: "40rem" }} />
      </div>
    </>
  );
};

export default NotFound;
