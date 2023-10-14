import React, { useState, useEffect } from "react";
import {
  addPermission,
  deletePermission,
  getPermissions,
  updatePermission,
} from "../../services/permission";
import { Button, Col, Row, Space, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.scss";
import PermissionForm from "./form";

const Permissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPermission, setEditingPermissions] = useState();

  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onClickAddPermission = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    if (editingPermission) {
      updatePermission({ ...values, id: editingPermission.id }).then(
        (response) => {
          setPermissions((prevState) =>
            prevState.map((p) => (p.id === response.id ? response : p))
          );
        }
      );
    } else {
      addPermission(values).then((response) => {
        setPermissions((prevState) => [...prevState, response]);
      });
    }
    setIsModalOpen(false);
  };

  const onDelete = (id) => {
    deletePermission(id).then((response) => {
      setPermissions((prevState) => prevState.filter((t) => t.id !== id));
    });
  };
  const onEdit = (permissons) => {
    setEditingPermissions(permissons);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "p1",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "p2",
      width: "100px",
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
    getPermissions().then((response) => {
      setPermissions(response);
    });
  }, []);

  return (
    <Space className="permissions" direction="vertical">
      <Row>
        <Col flex="auto" />
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            onClick={onClickAddPermission}
          />
        </Col>
      </Row>
      <Table dataSource={permissions} columns={columns} />
      {isModalOpen && (
        <PermissionForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValues={editingPermission}
        />
      )}
    </Space>
  );
};

export default Permissions;
