import axios from "axios";
import { userUrl } from "./apiUrl";

export const getUsers = async () => {
  const response = await axios.get(userUrl);
  return response.data;
};

export const getUserCount = async () => {
  const response = await axios.get(userUrl);
  return response.data.length;
};

export const getUser = async (id) => {
  const response = await axios.get(`${userUrl}/${id}`);
  return response.data;
};

export const addUser = async (user) => {
  const response = await axios.post(userUrl, user);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${userUrl}/${user.id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${userUrl}/${id}`);
  return response.data;
};
