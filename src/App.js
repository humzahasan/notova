import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useTheme } from "./context/theme-context";
import Homepage from "./pages/Homepage/Homepage";
import MyNotes from "./pages/MyNotes/MyNotes";

function App() {
  const { lightTheme } = useTheme();
  return (
    <div className={lightTheme ? "app-light" : "app-dark"}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </div>
  );
}

export default App;
