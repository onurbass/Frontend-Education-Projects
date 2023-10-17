import React, { useEffect, useState } from "react";
import {
  addTasks,
  deleteTasks,
  getTasks,
  updateTasks,
} from "../../services/task";
import { Button, Col, Row, Space, Table } from "antd";
import "./index.scss";
import TaskForm from "./form";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTasks, setEditingTasks] = useState();
  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onClickAddTasks = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    if (editingTasks) {
      updateTasks({ ...values, id: editingTasks.id }).then((response) => {
        setTasks((prevState) =>
          prevState.map((t) => (t.id === response.id ? response : t))
        );
      });
    } else {
      addTasks(values).then((response) => {
        setTasks((prevState) => [...prevState, response]);
      });
    }
    setIsModalOpen(false);
  };
  const onDelete = (id) => {
    deleteTasks(id).then((response) => {
      setTasks((prevState) => prevState.filter((t) => t.id !== id));
    });
  };
  const onEdit = (tasks) => {
    setEditingTasks(tasks);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "t1",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "t2",
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
    getTasks().then((response) => {
      setTasks(response);
    });
  }, []);

  return (
    <Space className="tasks" direction="vertical">
      <Row>
        <Col flex="auto" />
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            onClick={onClickAddTasks}
          />
        </Col>
      </Row>
      <Table dataSource={tasks} columns={columns} />
      {isModalOpen && (
        <TaskForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValues={editingTasks}
        />
      )}
    </Space>
  );
};

export default Tasks;
