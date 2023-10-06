import axios from "axios";

const NOT_URL = "http://localhost:5000/notlar";

export const addNot = async (data) => {
  const response = await axios.post(NOT_URL, data);
  return response.data;
};
