import React, { useContext, useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";

import Todo from "../../pages/Todo";
import Login from "../../pages/login";
import UseMemoPage from "../../pages/usememo";
import Permission from "../../pages/permission";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import "./index.scss";
import PermissionContext from "../../context/Permission";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const { permissions } = useContext(PermissionContext);
  console.log(permissions);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout className="mainLayout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              ...(permissions.some((p) => p === "todo.tab.visible")
                ? [
                    {
                      key: "1",
                      icon: <UploadOutlined />,
                      label: <Link to="/todo">Todo</Link>,
                    },
                  ]
                : []),
              {
                key: "2",
                icon: <UploadOutlined />,
                label: <Link to="/login">Login</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/usememo">UseMemo</Link>,
              },
              {
                key: "4",
                icon: <VideoCameraOutlined />,
                label: <Link to="/permission">Permission</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed((prevState) => !prevState)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/" element={<Todo />} exact />

              {permissions.some((p) => p === "todo.tab.visible") && (
                <Route path="/todo" element={<Todo />} />
              )}
              <Route path="/login" element={<Login />} />
              <Route path="/usememo" element={<UseMemoPage />} />
              <Route path="/permission" element={<Permission />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainLayout;
