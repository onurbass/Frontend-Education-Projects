import { useContext } from "react";

import { Button, List } from "antd";

import TodoContext from "../../context/TodoContext";

import { DeleteOutlined } from "@ant-design/icons";
import { REMOVE_TODO } from "../../reducer/todoReducer";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const onClickDelete = (item) => {
    dispatch({ type: REMOVE_TODO, todo: item });
  };

  return (
    <List
      size="large"
      header={<div>Todo List</div>}
      bordered
      dataSource={todos}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              size="small"
              danger
              onClick={() => onClickDelete(item)}
            />,
          ]}
        >
          {item}
        </List.Item>
      )}
    />
  );
};

export default TodoList;
