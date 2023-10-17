import { useContext, useEffect, useState } from "react";
import { Button, ColorPicker, Form, Select } from "antd";
import { getUsers } from "../../services/user";
import {
  getSettings,
  setSettings as setSettingsToDb,
} from "../../services/settings";
import { getPermissionsByDefaultUser } from "../../services/permission";
import PermissionContext from "../../context/PermissionContext";
import SettingsContext from "../../context/SettingsContext";

const Settings = () => {
  const [form] = Form.useForm();
  const { setPermissions } = useContext(PermissionContext);
  const { setSettings: setSettingsToContext } = useContext(SettingsContext);
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState({ themeColor: "#f1c40f" });

  const onFinish = (values) => {
    setSettingsToDb(values).then((res) => {
      const selectedUser = users.find((u) => u.value === res.user);

      setSettingsToContext({
        ...res,
        userName: selectedUser.label,
      });

      getPermissionsByDefaultUser().then((p) => {
        setPermissions(p);
        localStorage.setItem("permissions", p.join());
      });
    });
  };

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(
        response.map((u) => ({
          label: `${u.firstname} ${u.lastname}`,
          value: u.id,
        }))
      );

      getSettings().then((response) => {
        setSettings(response);
        form.setFieldsValue(response);
      });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Form
      form={form}
      name="settings"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={settings}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="User"
        name="user"
        rules={[
          {
            required: true,
            message: "Please select your user!",
          },
        ]}
      >
        <Select options={users} />
      </Form.Item>

      <Form.Item
        label="Theme Color"
        name="themeColor"
        rules={[
          {
            required: true,
            message: "Please select your color!",
          },
        ]}
        trigger="onChangeComplete"
        getValueFromEvent={(color) => color.toHexString()}
      >
        <ColorPicker format="hex" trigger="click" />
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

export default Settings;
