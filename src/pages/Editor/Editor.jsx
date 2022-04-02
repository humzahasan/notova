import React from "react";
import MDEditor from "@uiw/react-md-editor";
import "./Editor.css";
import Navbar from "../../Components/Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";

const Editor = () => {
  const [noteContent, setNoteContent] = React.useState("**Add your note**");
  const [noteTitle, setNoteTitle] = React.useState("");
  const submithandler = () => {
    // setNotes({ id: uuidv4(), title: noteTitle, content: noteContent });
    noteTitle &&
      noteContent &&
      console.log({ id: uuidv4(), title: noteTitle, content: noteContent });
  };
  return (
    <>
      <Navbar />
      <div className="editor-container">
        <input
          type="text"
          placeholder="Title"
          className="input-box input-outline input-line editor-title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
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
        <button
          className="btn btn-outline btn-primary btn-add"
          onClick={submithandler}
        >
          Add My Note
        </button>
      </div>
    </>
  );
};

export default Editor;
