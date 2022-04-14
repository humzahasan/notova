import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import "./index.css";
import App from "./App";
import { NoteProvider, ThemeProvider, UserProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ThemeProvider>
          <NoteProvider>
            <App />
          </NoteProvider>
        </ThemeProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
