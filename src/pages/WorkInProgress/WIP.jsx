import React from "react";
import InProgress from "../../assets/wip.svg";
import { Sidebar } from "../../Components";
const WIP = () => {
  return (
    <>
      <div className="grid-col-2 grid-col-3by7">
        <div className="grid-item">
          <Sidebar />
        </div>
        <div className="grid-item">
          <h1 className="lg-title">Work In Progress</h1>
          <img
            src={InProgress}
            alt="workinprogress"
            style={{ maxWidth: "50rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default WIP;
