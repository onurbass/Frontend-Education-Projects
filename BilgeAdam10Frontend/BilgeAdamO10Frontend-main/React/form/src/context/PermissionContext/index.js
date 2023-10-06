import { createContext, useState } from "react";

const PermissionContext = createContext();

const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]);

  return (
    <PermissionContext.Provider value={{ permissions, setPermissions }}>
      {children}
    </PermissionContext.Provider>
  );
};

export default PermissionContext;
export { PermissionProvider };
