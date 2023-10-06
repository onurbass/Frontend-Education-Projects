import { useContext, useEffect } from "react";

import MainLayout from "./components/MainLayout";

import { getPermissions } from "./services/permission";
import PermissionContext from "./context/PermissionContext";

function App() {
  const { setPermissions } = useContext(PermissionContext);

  useEffect(() => {
    getPermissions().then((response) => {
      setPermissions(response.filter((p) => p.value).map((p) => p.name));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
