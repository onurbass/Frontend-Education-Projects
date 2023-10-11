import React from "react";
import { Button, Form, Input, Switch } from "antd";
import { addPermission } from "../../service/permission";

const Permission = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addPermission(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="permission"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
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
        label="Permission Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your permission name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={false}
        label="Value"
        name="value"
        rules={[
          {
            required: true,
            message: "Please input value!",
          },
        ]}
      >
        <Switch />
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
  );
};

export default Permission;
