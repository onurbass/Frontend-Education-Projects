import { Button, Form, Input, Switch } from "antd";
import { addPermission } from "../../services/permission";

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
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      style={{
        maxWidth: 600,
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
            message: "Please input your name!",
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
            message: "Please input the value!",
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
