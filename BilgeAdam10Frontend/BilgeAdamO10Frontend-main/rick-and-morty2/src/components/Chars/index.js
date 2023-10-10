import Char from "../Char";

import "./index.scss";

const Chars = ({ data = [] }) => {
  return (
    <div className="chars">
      {data.map((char) => (
        <Char key={char.id} {...char} />
      ))}
    </div>
  );
};

export default Chars;
