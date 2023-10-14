import { Button, Form, Input, InputNumber, Modal, Select } from "antd";

const UserForm = ({
  isModalOpen,
  onCancel,
  onFinish,
  initialValues,
  roles,
  flows,
}) => {
  return (
    <Modal
      title="User"
      open={isModalOpen}
      onCancel={onCancel}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Form
        name="user"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={initialValues}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Firstname"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input the firstname!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Lastname"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input the lastname!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Please input a valid email!",
            },
            {
              required: true,
              message: "Please input the email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input the age!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input the address!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Roles"
          name="roles"
          rules={[
            {
              required: true,
              message: "Please select!",
            },
          ]}
        >
          <Select mode="tags" options={roles} />
        </Form.Item>

        <Form.Item
          label="Flows"
          name="flows"
          rules={[
            {
              required: true,
              message: "Please select! any flow",
            },
          ]}
        >
          <Select mode="tags" options={flows} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;
