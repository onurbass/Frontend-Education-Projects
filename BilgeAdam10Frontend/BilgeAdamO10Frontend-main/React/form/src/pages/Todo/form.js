import { useContext } from "react";

import { Button, Form, Input } from "antd";

import TodoContext from "../../context/TodoContext";
import { ADD_TODO } from "../../reducer/todoReducer";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch({ type: ADD_TODO, todo: values.todo });
  };

  return (
    <Form
      form={form}
      name="todoForm"
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
        label="Todo"
        name="todo"
        rules={[
          {
            required: true,
            message: "Please input the todo item!",
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
  );
};

export default TodoForm;
