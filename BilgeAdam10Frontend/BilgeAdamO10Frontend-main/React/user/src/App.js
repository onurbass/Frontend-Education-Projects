// import React, { useEffect, useState } from "react";
import User from "./pages/user";

function App(/*{ prop1 }*/) {
  // const [state1, setState1] = useState({ key1: "value1", key2: "value2" });

  // useEffect(() => {
  //   // * prop1 her değiştiğinde buraya girecek.
  // }, [prop1]);

  // useEffect(() => {
  //   // * state1.key1 veya prop1 her değiştiğinde buraya girecek.
  // }, [state1.key1, prop1]);

  // useEffect(() => {
  //   // * state1.key her değiştiğinde buraya girecek.
  // }, [state1.key1]);

  // useEffect(() => {
  //   // * state1 her değiştiğinde buraya girecek.
  // }, [state1]);

  // useEffect(() => {
  //   // * component ilk render olduğunda buraya girecek.
  // }, []);

  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
