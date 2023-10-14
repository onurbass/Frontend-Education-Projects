import React, { useState, useEffect } from "react";

import { Button, Col, Row, Space, Table, Tag, Tooltip, theme } from "antd";
import RoleForm from "./form";

import { addRole, deleteRole, getRoles, updateRole } from "../../services/role";
import { getPermissions } from "../../services/permission";

import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleTwoTone,
  PlusOutlined,
} from "@ant-design/icons";
import "./index.scss";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRole, setEditingRoles] = useState();
  const [permissions, setPermissions] = useState([]);
  const {
    token: { colorPrimary, colorPrimaryActive },
  } = theme.useToken();

  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onClickAddRole = () => {
    setEditingRoles();
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    if (editingRole) {
      updateRole({ ...values, id: editingRole.id }).then((response) => {
        setRoles((prevState) =>
          prevState.map((p) => (p.id === response.id ? response : p))
        );
      });
    } else {
      addRole(values).then((response) => {
        setRoles((prevState) => [...prevState, response]);
      });
    }
    setIsModalOpen(false);
  };

  const onDelete = (id) => {
    deleteRole(id).then((response) => {
      setRoles((prevState) => prevState.filter((t) => t.id !== id));
    });
  };
  const onEdit = (permissons) => {
    setEditingRoles(permissons);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "r1",
      render: (cell, row) => (
        <Space>
          {cell}
          <Tooltip title={row.description} placement="right">
            <InfoCircleTwoTone twoToneColor={colorPrimaryActive} />
          </Tooltip>
        </Space>
      ),
    },
    {
      title: "Permissions",
      dataIndex: "permissions",
      key: "r2",
      render: (cell) => {
        return (
          <Space>
            {cell?.map((id) => (
              <Tag key={id} color={colorPrimary}>
                {permissions.find((p) => p.value === id)?.label}
              </Tag>
            ))}
          </Space>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "r3",
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
    getRoles().then((response) => {
      setRoles(response);
    });
    getPermissions().then((response) => {
      setPermissions(
        response.map((p) => ({
          value: p.id,
          label: p.name,
        }))
      );
    });
  }, []);

  return (
    <Space className="roles" direction="vertical">
      <Row>
        <Col flex="auto" />
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            onClick={onClickAddRole}
          />
        </Col>
      </Row>
      <Table dataSource={roles} columns={columns} />
      {isModalOpen && (
        <RoleForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValues={editingRole}
          permissions={permissions}
        />
      )}
    </Space>
  );
};

export default Roles;
