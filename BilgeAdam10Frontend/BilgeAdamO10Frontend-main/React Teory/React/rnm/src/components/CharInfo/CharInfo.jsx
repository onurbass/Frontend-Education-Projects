import "./CharInfo.css";

const CharInfo = ({ char, state }) => {
  return (
    <div>
      <h1>{char}</h1>
      <span>{state}</span>
    </div>
  );
};

export default CharInfo;
