import React, { useState, useEffect } from "react";
import { getChars, getFirstEpisodeName } from "../../service/service";
import Card from "../../components/Card/Card";

const Char = () => {
  const [char, setChars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getChars();
        const characters = response.data.results;

        const episodeNamesPromises = characters.map((character) =>
          getFirstEpisodeName(character.episode[0])
        );

        const episodeNames = await Promise.all(episodeNamesPromises);

        const charactersWithEpisodeNames = characters.map(
          (character, index) => ({
            ...character,
            firstEpisodeName: episodeNames[index],
          })
        );

        setChars(charactersWithEpisodeNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="char">
      {char.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

export default Char;
