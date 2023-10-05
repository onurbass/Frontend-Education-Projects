import React from "react";

import "./App.css";
import Char from "./pages/chars/Char";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Char />
    </div>
  );
}

export default App;
