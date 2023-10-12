import { Button, Form, Input, Modal } from "antd";
import React from "react";

const TaskForm = ({ isModalOpen, onFinish, initialValue, onCancel }) => {
  return (
    <Modal
      title="Task"
      open={isModalOpen}
      onCancel={onCancel}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Form
        name="task"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={initialValue}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Task"
          name="task"
          rules={[
            {
              required: true,
              message: "Please input task!",
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
    </Modal>
  );
};

export default TaskForm;
