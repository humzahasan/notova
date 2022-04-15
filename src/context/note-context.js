import { createContext, useContext, useEffect, useReducer } from "react";
import { NoteReducer } from "../reducer/note-reducer";
import axios from "axios";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NoteContext = createContext({ notes: [], archives: [], deleted: [] });

const NoteProvider = ({ children }) => {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(NoteReducer, {
    notes: [],
    archives: [],
    deleted: [],
  });

  const getNotes = async () => {
    try {
      const res = await axios.get("/api/notes", {
        headers: {
          authorization: getToken(),
        },
      });
      if (res.status === 200) {
        dispatch({ type: "SET_NOTES", payload: res.data.notes });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const getArchive = async () => {
    try {
      const res = await axios.get("/api/archives", {
        headers: {
          authorization: getToken(),
        },
      });
      if (res.status === 200) {
        dispatch({ type: "SET_ARCHIVE", payload: res.data });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const addNotes = async (note) => {
    try {
      const res = await axios.post(
        "/api/notes",
        { note },
        {
          headers: {
            authorization: getToken(),
          },
        }
      );
      if (res.status === 201) {
        dispatch({ type: "ADD_NOTE", payload: res.data.notes });
        navigate("/mynotes");
        toast.success("Note added!");
      }
    } catch (error) {
      toast.error("Something went wrong, try again!");
    }
  };

  const updateNotes = async (note, id) => {
    try {
      const res = await axios.post(
        `/api/notes/${id}`,
        { note },
        {
          headers: {
            authorization: getToken(),
          },
        }
      );
      if (res.status === 201) {
        dispatch({ type: "UPDATE_NOTE", payload: res.data.notes });
        navigate("/mynotes");
        toast.success("Note updated!");
      }
    } catch (error) {
      toast.error("Something went wrong, try again!");
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await axios.delete(`/api/notes/${id}`, {
        headers: {
          authorization: getToken(),
        },
      });

      if (res.status === 200) {
        dispatch({ type: "DELETE_NOTE", payload: res.data.notes });

        toast.success("Note deleted!");
      }
    } catch (error) {
      toast.error("Something went wrong, try again!");
    }
  };

  const moveToArchive = async (id, note) => {
    try {
      const res = await axios.post(
        `/api/notes/archives/${id}`,
        { note },
        {
          headers: {
            authorization: getToken(),
          },
        }
      );
      if (res.status === 201) {
        dispatch({ type: "MOVE_TO_ARCHIVE", payload: res.data });

        toast.success("Note archieved!");
      }
    } catch (error) {
      toast.error("Something went wrong, try again!");
    }
  };

  const deleteFromArchive = async (id) => {
    try {
      const res = await axios.delete(`/api/archives/delete/${id}`, {
        headers: {
          authorization: getToken(),
        },
      });

      if (res.status === 200) {
        dispatch({ type: "DELETE_ARCHIVE", payload: res.data.archives });

        toast.success("Archived note deleted!");
      }
    } catch (error) {
      toast.error("Something went wrong, try again!");
    }
  };

  const restoreToNote = async (id) => {
    try {
      const res = await axios.post(`/api/archives/restore/${id}`, {
        headers: {
          authorization: getToken(),
        },
      });

      if (res.status === 200) {
        dispatch({ type: "RESTORE_NOTES", payload: res.data.archives });
        toast.success("Archived note deleted!");
      }
    } catch (error) {
      toast.error("Something went wrong, try again!");
    }
  };

  useEffect(() => {
    getNotes();
    getArchive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NoteContext.Provider
      value={{
        state,
        dispatch,
        addNotes,
        updateNotes,
        deleteNote,
        moveToArchive,
        deleteFromArchive,
        restoreToNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
