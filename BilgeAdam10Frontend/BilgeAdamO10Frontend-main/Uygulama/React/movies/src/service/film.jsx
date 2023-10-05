import axios from "axios";

export function getFilms() {
  return axios.get("http://localhost:5015/films");
}
