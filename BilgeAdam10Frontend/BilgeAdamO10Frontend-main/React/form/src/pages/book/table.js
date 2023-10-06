import React from "react";

import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "book_id",
  },
  {
    title: "Book Name",
    dataIndex: "book",
    key: "book_book",
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "book_author",
  },
];

const BookTable = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default BookTable;
