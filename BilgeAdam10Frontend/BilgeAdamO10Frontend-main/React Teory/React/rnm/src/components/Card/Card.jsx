import "./Card.css";
const Card = ({
  name,
  status,
  species,
  location,
  image,
  firstEpisodeName,
  episode,
  url,
}) => {
  return (
    <div className="card">
      <div className="left">
        <img src={image} alt={name} />
      </div>
      <div className="right">
        <div>
          <a href={url}>
            <h2>{name}</h2>
          </a>

          <span>
            {status} - {species}
          </span>
        </div>
        <div className="char-detail">
          <span>Last known location :</span>
          <a href={location.url}>{location.name}</a>
        </div>
        <div className="char-detail">
          <span>First seen in:</span>
          {firstEpisodeName ? (
            <a href={episode[0]}>{firstEpisodeName}</a>
          ) : (
            "No episode data available"
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
