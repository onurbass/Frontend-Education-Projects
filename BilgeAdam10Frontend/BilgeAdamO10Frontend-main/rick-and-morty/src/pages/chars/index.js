import React, { useEffect, useState } from "react";

import Card from "../../components/Card";

import { getCharacters } from "../../services";

import "./index.scss";

const Chars = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => {
      console.log(response);
      setChars(response);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="chars">
      {chars.map((char) => (
        <Card {...char} />
      ))}
    </div>
  );
};

export default Chars;
