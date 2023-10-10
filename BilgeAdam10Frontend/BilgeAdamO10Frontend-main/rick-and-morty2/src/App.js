import { ConfigProvider, theme } from "antd";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <MainPage />
    </ConfigProvider>
  );
}

export default App;
