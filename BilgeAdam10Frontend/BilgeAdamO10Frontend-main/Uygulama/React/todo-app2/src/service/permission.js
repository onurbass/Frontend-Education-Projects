import axios from "axios";

const PERMISSION_URL = "http://localhost:5000/permission";

export const addPermission = async (asd) => {
  const response = await axios.post(PERMISSION_URL, asd);
  return response.data;
};

export const getPermission = async () => {
  const response = await axios.get(PERMISSION_URL);
  return response.data;
};
