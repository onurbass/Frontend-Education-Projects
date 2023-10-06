import React from "react";

import Anchor from "./components/Anchor";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import Header from "./components/Header";
import ConditionalButton from "./components/ConditionalButton";
import Tabs from "./components/Tabs";

import logo from "./logo.svg";
import "./App.scss";

const items = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

function App() {
  const style = { display: "block" /*, backgroundColor: "blue"*/ };

  const onClickParagraph = () => {
    console.log("clicked");
  };

  const onChange = (key) => {
    console.log(key);
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
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Header>
    </div>
  );
}

export default App;
