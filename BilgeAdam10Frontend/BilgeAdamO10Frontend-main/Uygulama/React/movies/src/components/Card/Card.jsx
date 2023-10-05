import PropTypes from "prop-types";

const Card = ({ coverImage, name, year, director }) => {
  return (
    <div className="movie-card">
      <div>
        <img src={coverImage} alt="sa" />
        <h3>{name}</h3>
      </div>
      <div>
        <span>{year}</span>
        <span>{director}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  coverImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
};

export default Card;
