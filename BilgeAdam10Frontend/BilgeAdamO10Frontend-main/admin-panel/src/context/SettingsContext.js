import { createContext, useState } from "react";

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    user: null,
    userName: null,
    themeColor: "#f1c40f",
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
export { SettingsProvider };
