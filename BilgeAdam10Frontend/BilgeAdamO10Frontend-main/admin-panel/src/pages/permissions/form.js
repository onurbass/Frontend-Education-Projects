import { Button, Form, Input, Modal } from "antd";

const PermissionForm = ({ isModalOpen, onCancel, initialValues, onFinish }) => {
  return (
    <Modal
      title="Permission"
      open={isModalOpen}
      onCancel={onCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
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
