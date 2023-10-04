import React, { useEffect } from "react";
import User from "./pages/user/User";

function App() {
  useEffect(() => {
    document.title = "User";
  }, []);
  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
