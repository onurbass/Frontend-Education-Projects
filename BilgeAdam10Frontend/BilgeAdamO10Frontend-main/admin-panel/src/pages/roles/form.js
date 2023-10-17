import { Button, Form, Input, Modal, Select } from "antd";

const RoleForm = ({
  isModalOpen,
  onCancel,
  initialValues,
  onFinish,
  permissions,
}) => {
  return (
    <Modal
      title="Role"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <Form
        name="role"
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
          label="Role Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input the name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Permissions"
          name="permissions"
          rules={[
            {
              required: true,
              message: "Please select!",
            },
          ]}
        >
          <Select mode="tags" options={permissions} />
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

export default RoleForm;
