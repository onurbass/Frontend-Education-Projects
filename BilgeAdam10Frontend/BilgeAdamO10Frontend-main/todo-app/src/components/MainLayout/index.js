import React, { useContext, useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";

import Todo from "../../pages/Todo";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,

} from "@ant-design/icons";

import "./index.scss";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {

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
              {
                key: "1",
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
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainLayout;