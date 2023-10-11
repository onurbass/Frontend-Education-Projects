import React, { useMemo, useState } from "react";
import { Form, Button, InputNumber } from "antd";

const UseMemoPage = () => {
  const [values, setValues] = useState({});

  const sum = useMemo(() => {
    return values.x + values.y;
  }, [values]);

  const onFinish = (caner) => {
    setValues(caner);
    console.log(caner);
  };

  return (
    <>
      <Form
        name="useMemo"
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
          label="X"
          name="x"
          rules={[
            {
              required: true,
              message: "Please input x!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Y"
          name="y"
          rules={[
            {
              required: true,
              message: "Please input y!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sum
          </Button>
        </Form.Item>
      </Form>
      <div>{sum}</div>
    </>
  );
};

export default UseMemoPage;
