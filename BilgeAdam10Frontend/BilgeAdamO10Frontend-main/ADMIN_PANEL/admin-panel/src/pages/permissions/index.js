import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Table } from "antd";
import PermissionForm from "./form";
import { useState, useEffect } from "react";

import "./index.scss";
import {
  addPermission,
  deletePermission,
  getPermissions,
  updatePermission,
} from "../../services/permission";

const Permissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPermission, setEditingPermission] = useState();

  const onEdit = (permission) => {
    setIsModalOpen(true);
    setEditingPermission(permission);
  };
  const onDelete = (id) => {
    // delete
    deletePermission(id).then((permissions) => {
      setPermissions((prevState) => prevState.filter((p) => p.id !== id));
    });
  };
  const onClickAddPermission = () => {
    setEditingPermission();
    setIsModalOpen(true);
  };
  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    if (editingPermission) {
      // update
      updatePermission({ ...values, id: editingPermission.id }).then(
        (permission) => {
          setPermissions((prevState) =>
            prevState.map((p) => (p.id === permission.id ? permission : p))
          );
        }
      );
    } else {
      // create
      addPermission(values).then((permission) => {
        setPermissions((prevState) => [...prevState, permission]);
      });
    }

    setIsModalOpen(false);
  };

  useEffect(() => {
    getPermissions().then((permissions) => {
      setPermissions(permissions);
    });
  }, []);

  const columns = [
    {
      title: "Permission Name",
      dataIndex: "permission_name",
      key: "p1",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "p2",
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
