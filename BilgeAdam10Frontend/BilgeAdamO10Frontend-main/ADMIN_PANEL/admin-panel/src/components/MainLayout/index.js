import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, Layout, Menu, Row, Switch, theme } from "antd";
import { MoonSvg, SunSvg } from "../../assets/images/svg";

const { Header, Content, Footer, Sider } = Layout;

const defaultTheme = "light";

const MainLayout = ({ menu, children, onChangeTheme }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [themeState, setThemeState] = useState(defaultTheme);
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken();

  const handleChangeTheme = (value) => {
    onChangeTheme(value);
    setThemeState(value ? "dark" : "light");
  };

  useEffect(() => {
    if (defaultTheme === "dark") {
      onChangeTheme(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: colorBgContainer }}
        theme={themeState}
      >
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={menu} />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer }}>
          <Row>
            <Col flex="auto" />
            <Col>
              <Switch
                checkedChildren={<MoonSvg />}
                unCheckedChildren={<SunSvg />}
                onChange={handleChangeTheme}
                defaultChecked={defaultTheme !== "light"}
              />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              color: colorText,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Admin Panel ©2023 Created by me
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
