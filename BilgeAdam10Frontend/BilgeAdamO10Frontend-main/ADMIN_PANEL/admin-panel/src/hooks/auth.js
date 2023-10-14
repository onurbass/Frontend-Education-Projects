import { useContext } from "react";
import PermissionContext from "../context/PermissionContext";

const useAuth = (authKey) => {
  const { permissions } = useContext(PermissionContext);

  return permissions.includes(authKey);
};

export default useAuth;
