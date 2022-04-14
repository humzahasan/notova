/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Navbar, Sidebar } from "../../Components";

import { useNote } from "../../context/note-context";
import "./MyNotes.css";
const MyNotes = () => {
  const {
    state: { notes },
    moveToArchive,
    deleteNote,
  } = useNote();

  const [filterText, setFilterText] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sortType, setSortType] = useState("");
  const [mynotes, setMyNotes] = useState();

  useEffect(() => {
    filterText.length > 0
      ? setMyNotes(
          notes.filter((note) => note[filterType]?.includes(filterText))
        )
      : setMyNotes(notes);
  }, [filterType, filterText, notes]);

  useEffect(() => {
    if (sortType.length > 0) {
      if (sortType === "date-oldest") {
        setMyNotes(
          notes?.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
        );
      } else if (sortType === "date-latest") {
        setMyNotes(
          notes?.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          })
        );
      } else if (sortType === "priority-lowest") {
        setMyNotes(
          notes?.sort((a, b) => {
            return Number(b.priority) - Number(a.priority);
          })
        );
      } else if (sortType === "priority-highest") {
        setMyNotes(
          notes?.sort((a, b) => {
            return Number(a.priority) - Number(b.priority);
          })
        );
      } else {
        setMyNotes(notes);
      }
    }
  }, [sortType]);

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="mynotes-container">
        <div className="grid-col-2 grid-col-3by7">
          <div className="grid-item">
            <Sidebar />
          </div>
          {mynotes ? (
            <div className="grid-item">
              <section className="mynotes-addons">
                <section>
                  <label htmlFor="filter">Filter : </label>
                  <div className="mynotes-filter">
                    <select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="input-filter-type"
                    >
                      <option value=""></option>
                      <option value="title">By Title</option>
                      <option value="tag">By Tag</option>
                      <option value="content">By Content</option>
                    </select>
                    <input
                      title="*Case Sensitive"
                      type="text"
                      className="input-box input-outline input-filter-text"
                      placeholder="Search Notes"
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                    />
                  </div>
                </section>
                <section>
                  <label htmlFor="sort">Sort : </label>
                  <select
                    name="sort"
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    className="input-sort-type"
                  >
                    <option value=""></option>
                    <option value="date-latest">By Date - Latest</option>
                    <option value="date-oldest">By Date - Oldest</option>
                    <option value="priority-highest">
                      By Priority - Highest
                    </option>
                    <option value="priority-lowest">
                      By Priority - Lowest
                    </option>
                  </select>
                </section>
              </section>
              {mynotes?.map(
                ({ title, tag, content, id, cardColor, priority, color }) => (
                  <Card
                    key={id}
                    title={title}
                    category={tag}
                    content={content}
                    deleteHandler={() => {
                      deleteNote(id);
                    }}
                    editHandler={() => {
                      navigate(`/edit/${id}`);
                    }}
                    archiveHandler={() => {
                      moveToArchive(id, {
                        date: new Date(),
                        title: title,
                        content: content,
                        tag: tag,
                        priority: priority,
                        color: color,
                      });
                    }}
                    colorHandler={() => {
                      console.log("color", cardColor);
                    }}
                  />
                )
              )}
            </div>
          ) : (
            <div className="grid-item flex-center-row">
              <h2 className="md-title">You have not added a note yet!</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyNotes;
