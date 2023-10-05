import axios from "axios";

export function getChars() {
  return axios.get("https://rickandmortyapi.com/api/character/?page=2");
}

export const getFirstEpisodeName = (episodeUrl) => {
  return axios.get(episodeUrl).then((response) => response.data.name);
};
