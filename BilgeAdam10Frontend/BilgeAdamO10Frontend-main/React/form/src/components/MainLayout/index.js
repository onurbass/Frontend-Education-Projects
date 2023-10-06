import React, { useContext, useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";

import User from "../../pages/user";
import Permission from "../../pages/permission";
import Book from "../../pages/book";
import Todo from "../../pages/Todo";

import PermissionContext from "../../context/PermissionContext";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const { permissions } = useContext(PermissionContext);
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
              ...(permissions.some((p) => p === "user.tab.visible")
                ? [
                    {
                      key: "1",
                      icon: <UserOutlined />,
                      label: <Link to="/user">User</Link>,
                    },
                  ]
                : []),
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link to="/permission">Permission</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/book">Book</Link>,
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: <Link to="/todo">Todo</Link>,
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
            {permissions.some((p) => p === "button.collapsed.visible") && (
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
            )}
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
              <Route path="/" element={<User />} exact />
              {permissions.some((p) => p === "user.tab.visible") && (
                <Route path="/user" element={<User />} />
              )}
              <Route path="/permission" element={<Permission />} />
              <Route path="/book" element={<Book />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainLayout;
