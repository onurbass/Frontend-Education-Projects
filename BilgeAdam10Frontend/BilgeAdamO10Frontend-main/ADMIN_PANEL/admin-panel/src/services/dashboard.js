import { getFlowCount } from "./flows";
import { getPermissionCount } from "./permission";
import { getRoleCount } from "./role";
import { getTaskCount } from "./task";
import { getUserCount } from "./user";
// import { storeInventoryUrl } from "./apiUrl";

// export const getInventory = async () => {
//   const response = await axios.get(storeInventoryUrl);
//   return response.data;
// };

export const getCounts = async () => {
  const userCount = await getUserCount();
  const roleCount = await getRoleCount();
  const permissionCount = await getPermissionCount();
  const taskCount = await getTaskCount();
  const flowCount = await getFlowCount();
  return [userCount, roleCount, permissionCount, taskCount, flowCount];
};
