import axios from "axios";
import { permissionUrl } from "./apiUrl";

export const getPermissions = async () => {
  const response = await axios.get(permissionUrl);
  return response.data;
};

export const addPermission = async (permission) => {
  const response = await axios.post(permissionUrl, permission);
  return response.data;
};

export const updatePermission = async (permission) => {
  const response = await axios.put(
    `${permissionUrl}/${permission.id}`,
    permission
  );
  return response.data;
};

export const deletePermission = async (id) => {
  const response = await axios.delete(`${permissionUrl}/${id}`);
  return response.data;
};
