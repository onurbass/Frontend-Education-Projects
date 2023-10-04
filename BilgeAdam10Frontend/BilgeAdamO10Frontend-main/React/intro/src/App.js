import React from "react";

import Anchor from "./components/Anchor";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import Header from "./components/Header";
import ConditionalButton from "./components/ConditionalButton";

import logo from "./logo.svg";
import "./App.scss";

function App() {
  const style = { display: "block" /*, backgroundColor: "blue"*/ };

  const onClickParagraph = () => {
    console.log("clicked");
  };

  return (
    <div className="App">
      <Header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <Paragraph
          style={style}
          className="App-paragraph"
          onClick={onClickParagraph}
        >
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>
        <Anchor
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          purple // purple={true}
        >
          Learn React
        </Anchor>
        <ConditionalButton />
      </Header>
    </div>
  );
}

export default App;
