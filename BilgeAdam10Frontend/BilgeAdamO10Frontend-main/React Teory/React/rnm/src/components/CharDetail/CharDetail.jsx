import "./CharDetail.css";
const CharDetail = ({ info, link, explanation }) => {
  return (
    <div className="char-detail">
      <span>{info}</span>
      <a href={link}>{explanation}</a>
    </div>
  );
};

export default CharDetail;
