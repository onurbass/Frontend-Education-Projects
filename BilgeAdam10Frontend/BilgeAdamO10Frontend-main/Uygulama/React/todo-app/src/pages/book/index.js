import React, { useEffect, useState } from "react";

import { Button, Form, Input } from "antd";
import BookTable from "./table";

import { addBook, getBooks } from "../../services/book";

const Book = () => {
  const [form] = Form.useForm();
  const [books, setBooks] = useState([]);

  const onFinish = (values) => {
    addBook(values).then((response) => {
      setBooks((prevState) => [
        ...prevState,
        { ...response, key: response.id },
      ]);

      form.resetFields();
    });
  };

  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response.map((item) => ({ ...item, key: item.id })));
    });
  }, []);

  return (
    <>
      <Form
        form={form}
        name="book"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Book Name"
          name="book"
          rules={[
            {
              required: true,
              message: "Please input your book name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[
            {
              required: true,
              message: "Please input the author!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <BookTable data={books} />
    </>
  );
};

export default Book;
