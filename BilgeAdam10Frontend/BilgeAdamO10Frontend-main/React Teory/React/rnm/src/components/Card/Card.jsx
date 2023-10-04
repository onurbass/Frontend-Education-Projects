import "./Card.css";
import CharDetail from "../CharDetail/CharDetail";
import CharInfo from "../CharInfo/CharInfo";
import CardImage from "../CardImage/CardImage";

const Card = ({}) => {
  return (
    <div className="card">
      <div className="left">
        <CardImage
          src="https://rickandmortyapi.com/api/character/avatar/73.jpeg"
          alt="sa"
        />
      </div>
      <div className="right">
        <CharInfo char="Cop Morty" state="Dead Human" />

        <CharDetail
          info="Last known location :"
          explanation="Citadel of Ricks"
          link="https://rickandmortyapi.com/api/location/3"
        />
        <CharDetail
          info="First seen in:"
          explanation="The Ricklantis Mixup"
          link="https://rickandmortyapi.com/api/episode/28"
        />
      </div>
    </div>
  );
};

export default Card;
