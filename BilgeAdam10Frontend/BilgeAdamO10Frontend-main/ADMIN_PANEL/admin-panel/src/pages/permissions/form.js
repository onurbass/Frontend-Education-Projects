import { Button, Form, Input, Modal } from "antd";

const PermissionForm = ({ isModalOpen, onCancel, onFinish, initialValues }) => {
  return (
    <Modal
      title="Permission"
      open={isModalOpen}
      onCancel={onCancel}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Form
        name="permission"
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
          label="Permission Name"
          name="permission_name"
          rules={[
            {
              required: true,
              message: "Please input the permission name!",
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
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PermissionForm;
