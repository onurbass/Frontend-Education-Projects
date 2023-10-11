import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import Dashboard from "./dashboard";
import Users from "./users";
import Roles from "./roles";
import Permissions from "./permissions";
import Tasks from "./tasks";
import Flows from "./flows";

import {
  CarryOutOutlined,
  PieChartOutlined,
  SkinOutlined,
  SlidersOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";

const MainPage = ({ onChangeTheme }) => {
  const menu = [
    {
      key: "m1",
      icon: <PieChartOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: "m2",
      icon: <UserOutlined />,
      label: <Link to="/user">User</Link>,
    },
    {
      key: "m3",
      icon: <SkinOutlined />,
      label: <Link to="/role">Role</Link>,
    },
    {
      key: "m4",
      icon: <UnorderedListOutlined />,
      label: <Link to="/permission">Permission</Link>,
    },
    {
      key: "m5",
      icon: <SlidersOutlined />,
      label: <Link to="/task">Tasks</Link>,
    },
    {
      key: "m6",
      icon: <CarryOutOutlined />,
      label: <Link to="/flow">Flows</Link>,
    },
  ];

  return (
    <BrowserRouter>
      <MainLayout menu={menu} onChangeTheme={onChangeTheme}>
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/user" element={<Users />} />
          <Route path="/role" element={<Roles />} />
          <Route path="/permission" element={<Permissions />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/flow" element={<Flows />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MainPage;
