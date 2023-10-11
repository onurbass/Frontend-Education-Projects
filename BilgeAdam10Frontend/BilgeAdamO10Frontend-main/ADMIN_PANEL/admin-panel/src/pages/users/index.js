import { useEffect, useState } from "react";

import { Button, Col, Row, Space, Table } from "antd";

import { addUser, deleteUser, getUsers, updateUser } from "../../services/user";

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.scss";
import UserForm from "./form";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState();

  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onClickAddUser = () => {
    setEditingUser();
    setIsModalOpen(true);
  };
  const onFinish = (values) => {
    if (editingUser) {
      updateUser({ ...values, id: editingUser.id }).then((response) => {
        setUsers((prevState) =>
          prevState.map((u) => (u.id === response.id ? response : u))
        );
      });
    } else {
      addUser(values).then((response) => {
        setUsers((prevState) => [...prevState, response]);
      });
    }
    setIsModalOpen(false);
  };
  const onDelete = (id) => {
    deleteUser(id).then((response) => {
      setUsers((prevState) => prevState.filter((u) => u.id !== id));
    });
  };
  const onEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "us1",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "us2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "us3",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "us4",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "us5",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "us6",
      render: (cell, row) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            size="small"
            onClick={() => onEdit(row)}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => onDelete(cell)}
            danger
          />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  return (
    <Space className="users" direction="vertical">
      <Row>
        <Col flex="auto" />
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            onClick={onClickAddUser}
          />
        </Col>
      </Row>
      <Table dataSource={users} columns={columns} />
      {isModalOpen && (
        <UserForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValues={editingUser}
        />
      )}
    </Space>
  );
};

export default Users;
