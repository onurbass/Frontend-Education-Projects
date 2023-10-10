import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/?page={0}";

export const getChars = async (page = 1) => {
  const response = await axios.get(API_URL.replace("{0}", page));
  return response.data;
};

export const getEpisode = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
