import { useState, useEffect } from "react";

import Card from "../components/Card/Card";
import { getFilms } from "../service/film";

const Film = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((response) => setFilms(response.data));
  }, []);
  return (
    <div className="film">
      {films.map((film) => (
        <Card key={film.id} {...film} />
      ))}
    </div>
  );
};

export default Film;
