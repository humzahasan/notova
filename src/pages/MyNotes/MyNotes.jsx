import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./MyNotes.css";
import MyNotesContent from "./MyNotesContent/MyNotesContent";

const MyNotes = () => {
  return (
    <>
      <Navbar />
      <section className="mynotes-container">
        <div className="grid-col-2 grid-col-3by7">
          <div className="grid-item">
            <Sidebar />
          </div>
          <div className="grid-item">
            <MyNotesContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyNotes;
