import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/?page=2";

export const getCharacters = async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
};

export const getEpisodeName = async (url) => {
  const response = await axios.get(url);
  return response.data.name;
};
