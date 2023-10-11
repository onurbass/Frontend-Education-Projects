import React from "react";

import { Space, Button } from "antd";

const Login = () => {
  const onClickLogin = () => {
    sessionStorage.setItem("token", "token2");
  };

  const onClickLogout = () => {
    sessionStorage.removeItem("token");
  };

  const onClickToken = () => {
    console.log(sessionStorage.getItem("token"));
  };

  const onClickClear = () => {
    sessionStorage.clear();
  };

  return (
    <Space>
      <Button type="primary" onClick={onClickLogin}>
        Login
      </Button>
      <Button type="primary" onClick={onClickLogout}>
        Logout
      </Button>
      <Button type="primary" onClick={onClickToken}>
        Get Token
      </Button>
      <Button type="primary" onClick={onClickClear}>
        Clear
      </Button>
    </Space>
  );
};

export default Login;
