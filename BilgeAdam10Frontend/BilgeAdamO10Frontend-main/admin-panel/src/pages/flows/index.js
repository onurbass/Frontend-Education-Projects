import React, { useState, useEffect } from "react";

import { Button, Col, Row, Space, Table, Tag, Tooltip, theme } from "antd";
import FlowForm from "./form";

import {
  addFlow,
  deleteFlow,
  getFlows,
  updateFlow,
} from "../../services/flows";
import { getTasks } from "../../services/task";

import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleTwoTone,
  PlusOutlined,
} from "@ant-design/icons";
import "./index.scss";

const Flows = () => {
  const [flows, setFlows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFlow, setEditingFlows] = useState();
  const [tasks, setTasks] = useState([]);
  const {
    token: { colorPrimary, colorPrimaryActive },
  } = theme.useToken();

  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onClickAddFlow = () => {
    setEditingFlows();
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    if (editingFlow) {
      updateFlow({ ...values, id: editingFlow.id }).then((response) => {
        setFlows((prevState) =>
          prevState.map((p) => (p.id === response.id ? response : p))
        );
      });
    } else {
      addFlow(values).then((response) => {
        setFlows((prevState) => [...prevState, response]);
      });
    }
    setIsModalOpen(false);
  };

  const onDelete = (id) => {
    deleteFlow(id).then((response) => {
      setFlows((prevState) => prevState.filter((t) => t.id !== id));
    });
  };
  const onEdit = (permissons) => {
    setEditingFlows(permissons);
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
      title: "Tasks",
      dataIndex: "tasks",
      key: "r2",
      render: (cell) => {
        return (
          <Space>
            {cell?.map((id) => (
              <Tag key={id} color={colorPrimary}>
                {tasks.find((p) => p.value === id)?.label}
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
    getFlows().then((response) => {
      setFlows(response);
    });
    getTasks().then((response) => {
      setTasks(
        response.map((p) => ({
          value: p.id,
          label: p.name,
        }))
      );
    });
  }, []);

  return (
    <Space className="flows" direction="vertical">
      <Row>
        <Col flex="auto" />
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            onClick={onClickAddFlow}
          />
        </Col>
      </Row>
      <Table dataSource={flows} columns={columns} />
      {isModalOpen && (
        <FlowForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValues={editingFlow}
          tasks={tasks}
        />
      )}
    </Space>
  );
};

export default Flows;
