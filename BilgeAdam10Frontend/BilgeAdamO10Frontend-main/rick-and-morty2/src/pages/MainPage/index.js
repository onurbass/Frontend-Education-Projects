import { useEffect, useState } from "react";

import { Space } from "antd";
import Pagination from "../../components/Pagination";
import Chars from "../../components/Chars";

import { getChars } from "../../services";

import "./index.scss";

const MainPage = () => {
  const [chars, setChars] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const onChangePagination = (page) => {
    setCurrentPage(page);
    getChars(page).then((response) => {
      setChars(response);
    });
  };

  useEffect(() => {
    getChars().then((response) => {
      setChars(response);
    });
  }, []);

  return (
    <Space
      className="mainPage"
      direction="vertical"
      align="center"
      size="large"
    >
      <Pagination
        total={chars.info?.count}
        onChange={onChangePagination}
        current={currentPage}
      />
      <Chars data={chars.results} />
      <Pagination
        total={chars.info?.count}
        onChange={onChangePagination}
        current={currentPage}
      />
    </Space>
  );
};

export default MainPage;
