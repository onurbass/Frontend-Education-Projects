import axios from "axios";
import { settingsUrl } from "./apiUrl";

export const getSettings = async () => {
  const response = await axios.get(settingsUrl);
  return response.data;
};

export const setSettings = async (settings) => {
  const response = await axios.post(settingsUrl, settings);
  return response.data;
};
