import { createContext, useState, useEffect } from "react";
import { getFilms } from "../../../movies-app/src/service/api";
export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const categories = ["Tümü", "Aksiyon", "Drama", "Komedi"];
  const [films, setFilms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  useEffect(() => {
    getFilms().then((data) => setFilms(data));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredFilms =
    selectedCategory === "Tümü"
      ? films
      : films.filter((film) => film.category === selectedCategory);

  const contextValue = {
    categories,
    films,
    filteredFilms,
    handleCategoryChange,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
