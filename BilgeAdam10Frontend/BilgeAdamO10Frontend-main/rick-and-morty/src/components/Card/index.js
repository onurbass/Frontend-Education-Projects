import { useEffect, useState } from "react";
import cn from "classnames";

import Middle from "./middle";

import { getEpisodeName } from "../../services";

import portal from "../../assets/images/portal.png";
import "./index.scss";

const Card = ({
  image,
  name,
  status,
  species,
  url,
  location: { url: locUrl, name: locName },
  episode,
}) => {
  const [episodeName, setEpisodeName] = useState("");
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
  };

  const onBlur = () => {
    setClicked(false);
  };

  useEffect(() => {
    getEpisodeName(episode[0]).then((response) => {
      setEpisodeName(response);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cn("card", { clicked })} onClick={onClick} onBlur={onBlur}>
      <img className="card-portal" src={portal} alt="portal" />
      <div className="card-container">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>
      <div className="card-info">
        <div>
          <h2>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {name}
            </a>
          </h2>
          <p className="card-info-status">
            <span
              className={cn(
                "circle",
                status.toLowerCase() /*, {
                dead: status === "Dead",
                alive: status === "Alive",
                unknown: status === "unknown",
              }*/
              )}
            />
            {status} - {species}
          </p>
        </div>
        <Middle
          title="Last known location:"
          href={locUrl}
          description={locName}
        />
        <Middle
          title="First seen in:"
          href={episode[0]}
          description={episodeName}
        />
      </div>
      </div>
    </div>
  );
};

export default Card;
