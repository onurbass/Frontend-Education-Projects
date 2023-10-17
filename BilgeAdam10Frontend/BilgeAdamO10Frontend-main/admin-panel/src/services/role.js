import axios from "axios";
import { roleUrl } from "./apiUrl";

export const getRoles = async () => {
  const response = await axios.get(roleUrl);
  return response.data;
};

export const getRoleCount = async () => {
  const response = await axios.get(roleUrl);
  return response.data.length;
};

export const getRole = async (id) => {
  const response = await axios.get(`${roleUrl}/${id}`);
  return response.data;
};

export const addRole = async (role) => {
  const response = await axios.post(roleUrl, role);
  return response.data;
};

export const updateRole = async (role) => {
  const response = await axios.put(`${roleUrl}/${role.id}`, role);
  return response.data;
};

export const deleteRole = async (id) => {
  const response = await axios.delete(`${roleUrl}/${id}`);
  return response.data;
};
