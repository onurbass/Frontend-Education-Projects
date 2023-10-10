import { useEffect, useState } from "react";
import cn from "classnames";

import { Image, Typography } from "antd";
import Episode from "../Episode";

import { getEpisode } from "../../services";

import "./index.scss";

const { Title, Paragraph } = Typography;

const Char = ({
  image,
  name,
  species,
  status,
  location: { name: nameLoc, url: urlLoc },
  episode,
  url,
}) => {
  const episodeUrl = episode[0];
  const [episodeName, setEpisodeName] = useState("");

  useEffect(() => {
    getEpisode(episodeUrl).then((response) => {
      setEpisodeName(response.name);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="char">
      <div className="char-img">
        <Image src={image} alt={name} width={230} height={220} />
      </div>
      <div className="char-info">
        <div className="char-info-title">
          <Title level={2}>
            <a href={url} target="_blank" rel="noreferrer noopener">
              {name}
            </a>
          </Title>
          <Paragraph className="status">
            <div className={cn("circle", status.toLowerCase())} />
            {status} - {species}
          </Paragraph>
        </div>
        <Episode title="Last known location:" href={urlLoc}>
          {nameLoc}
        </Episode>
        <Episode title="First seen in:" href={episodeUrl}>
          {episodeName}
        </Episode>
      </div>
    </div>
  );
};

export default Char;
