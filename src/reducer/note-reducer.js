const NoteReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTE":
      return { ...state, notes: action.payload };

    case "ADD_NOTE":
      return { ...state, notes: action.payload };

    case "DELETE_NOTE":
      console.log(action.payload);
      return { ...state, notes: action.payload };

    case "UPDATE_NOTE":
      return { ...state, notes: action.payload };

    case "MOVE_TO_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };

    case "DELETE_ARCHIVE":
      console.log(action.payload);
      return { ...state, archives: action.payload };

    case "RESTORE_NOTES":
      console.log(action.payload);
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };

    default:
      return state;
  }
};

export { NoteReducer };
