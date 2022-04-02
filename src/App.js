import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import MyNotes from "./pages/MyNotes/MyNotes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </div>
  );
}

export default App;
