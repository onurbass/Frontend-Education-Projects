import { Space, Button } from "antd";

const Login = () => {
  const onClickLogin = () => {
    // localStorage.setItem("token", "token2");
    sessionStorage.setItem("token", "token2");
  };

  const onClickLogout = () => {
    // localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  const onClickToken = () => {
    // alert(localStorage.getItem("token"));
    alert(sessionStorage.getItem("token"));
  };

  const onClickClear = () => {
    // localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <Space>
      <Button type="primary" onClick={onClickLogin}>
        Login
      </Button>
      <Button type="primary" onClick={onClickLogout} danger>
        Logout
      </Button>
      <Button onClick={onClickToken}>Get Token</Button>
      <Button onClick={onClickClear}>Clear</Button>
    </Space>
  );
};

export default Login;
