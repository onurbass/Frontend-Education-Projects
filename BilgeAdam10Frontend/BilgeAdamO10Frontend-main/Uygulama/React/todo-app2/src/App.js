import { useContext, useEffect } from "react";
import MainLayout from "./components/MainLayout";
import PermissionContext from "./context/Permission";
import { getPermission } from "./service/permission";

function App() {
  const { setPermissions } = useContext(PermissionContext);

  useEffect(() => {
    getPermission().then((response) => {
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
