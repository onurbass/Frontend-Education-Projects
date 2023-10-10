import { Button, Form, InputNumber } from "antd";
import { useMemo, useState } from "react";

const UseMemoPage = () => {
  const [values, setValues] = useState({});

  const sum = useMemo(() => {
    return values.x + values.y;
  }, [values]);

  const onFinish = (serkan) => {
    setValues(serkan);
  };

  return (
    <>
      <Form
        name="useMemo"
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
          label="X"
          name="x"
          rules={[
            {
              required: true,
              message: "Please input the x!",
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
              message: "Please input the y!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 18,
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
