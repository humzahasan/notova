import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useTheme } from "./context/theme-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Archive,
  Deleted,
  Editor,
  Homepage,
  Login,
  MyNotes,
  Register,
  WIP,
} from "./pages";

function App() {
  const { lightTheme } = useTheme();
  return (
    <div className={lightTheme ? "app-light" : "app-dark"}>
      <ToastContainer autoClose={1500} position="bottom-right" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/archived" element={<Archive />} />
        <Route path="/deleted" element={<Deleted />} />
        <Route path="/create-note" element={<Editor />} />
        <Route path="/edit/:id" element={<Editor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/labels" element={<WIP />} />
        <Route path="/profile" element={<WIP />} />
      </Routes>
    </div>
  );
}

export default App;
