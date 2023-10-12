import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Table } from "antd";

import React, { useState, useEffect } from "react";
import {
  addTasks,
  deleteTask,
  getTasks,
  updateTask,
} from "../../services/task";

import "./index.scss";
import TaskForm from "./form";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState();

  const onClickAddTask = () => {
    setEditingTask();
    setIsModalOpen(true);
  };
  const onCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    if (editingTask) {
      updateTask({ ...values, id: editingTask.id }).then((response) => {
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
  const onEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };
  const onDelete = (id) => {
    deleteTask(id);
    setTasks((prevState) => prevState.filter((p) => p.id !== id));
  };

  useEffect(() => {
    getTasks().then((response) => setTasks(response));
  });
  const columns = [
    {
      title: "Task",
      dataIndex: "task",
      key: "t1",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "t2",
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
            danger
            onClick={() => onDelete(cell)}
          />
        </Space>
      ),
    },
  ];
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
            onClick={onClickAddTask}
          />
        </Col>
      </Row>
      <Table
        dataSource={tasks.map((task, index) => ({ ...task, key: index }))}
        columns={columns}
      />

      {isModalOpen && (
        <TaskForm
          isModalOpen={isModalOpen}
          onCancel={onCancel}
          onFinish={onFinish}
          initialValue={editingTask}
        />
      )}
    </Space>
  );
};

export default Tasks;
