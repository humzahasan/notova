import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./Editor.css";
import { Navbar } from "../../Components";
import { v4 as uuidv4 } from "uuid";
import { useNote } from "../../context/note-context";
import { useParams, useNavigate } from "react-router-dom";

const Editor = () => {
  const { state, addNotes, updateNotes } = useNote();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("**Add your note**");
  const [noteTag, setNoteTag] = useState("");
  const [priority, setPriority] = useState(3);
  const [color, setColor] = useState("#f79c52c5");

  const notesObj = {
    date: new Date(),
    title: noteTitle,
    content: noteContent,
    tag: noteTag,
    priority: priority,
    color: color,
  };

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const res = state.notes.find((note) => {
        return note.id === id;
      });
      if (res) {
        setNoteTitle(res.title);
        setNoteContent(res.content);
        setNoteTag(res.tag);
        setPriority(res.priority);
        setColor(res.color);
      } else {
        navigate("/mynotes");
      }
    }
  }, [id, navigate, state.notes]);

  return (
    <>
      <Navbar />
      <div className="editor-container">
        <div className="editor-extra">
          <input
            required
            type="text"
            placeholder="Title"
            className="input-box input-outline input-line editor-title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />

          <input
            required
            placeholder="Enter a category"
            className="input-box input-category"
            list="category"
            style={{ display: "block" }}
            value={noteTag}
            onChange={(e) => setNoteTag(e.target.value)}
          />
          <datalist id="category">
            <option value="Work" />
            <option value="Teams" />
            <option value="School" />
            <option value="College" />
            <option value="Exercise" />
            <option value="Personal" />
            <option value="Creativity" />
            <option value="Other" />
          </datalist>

          {/* <input
            required
            placeholder="Enter Priority"
            className="input-box input-category"
            style={{ width: "5rem" }}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          /> */}
          <div className="select">
            <select
              name="priority"
              className="input-filter-type select"
              placeholder="Enter Priority"
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
            >
              <option value="3">High</option>
              <option value="2">Medium</option>
              <option value="1">Low</option>
            </select>
          </div>
        </div>
        <MDEditor
          className="editor-content"
          value={noteContent}
          onChange={setNoteContent}
          height={500}
          preview={"edit"}
          fullscreen={false}
          visiableDragbar={false}
          maxHeight={600}
          enableScroll={true}
        />

        {/* <MDEditor.Markdown source={value} /> */}
        {noteContent.length > 0 &&
        noteTag.length > 0 &&
        noteTitle.length > 0 ? (
          id ? (
            <button
              className="btn btn-outline btn-primary btn-add"
              onClick={() => updateNotes(notesObj, id)}
            >
              Update Note
            </button>
          ) : (
            <button
              className="btn btn-outline btn-primary btn-add"
              onClick={() => addNotes({ ...notesObj, id: uuidv4() })}
            >
              Add My Note
            </button>
          )
        ) : (
          <button disabled="disabled" className="btn btn-outline btn-disabled">
            Add My Note
          </button>
        )}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Editor;
