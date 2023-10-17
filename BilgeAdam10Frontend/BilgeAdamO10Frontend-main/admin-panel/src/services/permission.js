import axios from "axios";
import { permissionUrl } from "./apiUrl";
import { getSettings } from "./settings";
import { getUser } from "./user";
import { getRole } from "./role";

export const getPermissions = async () => {
  const response = await axios.get(permissionUrl);
  return response.data;
};

export const getPermissionCount = async () => {
  const response = await axios.get(permissionUrl);
  return response.data.length;
};

export const getPermission = async (id) => {
  const response = await axios.get(`${permissionUrl}/${id}`);
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

export const getPermissionsByDefaultUser = async () => {
  // getSettings().then((settings) => {
  //   const defaultUser = settings.user;

  //   getUser(defaultUser).then((user) => {
  //     let permissionIds = [];
  //     user.roles.forEach((roleId) => {
  //       getRole(roleId).then((role) => {
  //         permissionIds = [...permissionIds, ...role.permissions];
  //       });
  //     });
  //     permissionIds = [...new Set(permissionIds)];

  //     let permissions = [];
  //     permissionIds.forEach((pId) => {
  //       getPermission(pId).then((p) => {
  //         permissions = [...permissions, p.name];
  //       });
  //     });
  //     return permissions;
  //   });
  // });
  const settings = await getSettings();
  const defaultUser = settings.user;

  const user = await getUser(defaultUser);

  let permissionIds = [];
  for (const roleId of user.roles) {
    const role = await getRole(roleId);
    permissionIds = [...permissionIds, ...role.permissions];
  }
  permissionIds = [...new Set(permissionIds)];

  let permissions = [];
  for (const pId of permissionIds) {
    const p = await getPermission(pId);
    permissions = [...permissions, p.name];
  }

  return permissions;
};
