import { useState } from "react";

import { ConfigProvider, theme } from "antd";
import MainPage from "./pages";

import { PermissionProvider } from "./context/PermissionContext";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#f1c40f");

  const onChangeTheme = (value) => {
    setIsDark(value);
  };

  return (
    <SettingsProvider>
      <PermissionProvider>
        <ConfigProvider
          theme={{
            algorithm: theme[isDark ? "darkAlgorithm" : "defaultAlgorithm"],
            token: {
              colorPrimary: primaryColor,
              fontSize: 14,
            },
          }}
        >
          <MainPage
            onChangeTheme={onChangeTheme}
            setPrimaryColor={setPrimaryColor}
          />
        </ConfigProvider>
      </PermissionProvider>
    </SettingsProvider>
  );
}

export default App;
