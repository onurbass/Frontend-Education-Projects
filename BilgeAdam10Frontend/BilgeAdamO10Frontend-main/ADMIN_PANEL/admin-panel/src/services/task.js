import axios from "axios";
import { taskUrl } from "./apiUrl";

export const getTasks = async () => {
  const response = await axios.get(taskUrl);
  return response.data;
};

export const addTasks = async (task) => {
  const response = await axios.post(taskUrl, task);
  return response.data;
};

export const updateTask = async (task) => {
  const response = await axios.put(`${taskUrl}/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${taskUrl}/${id}`);
  return response.data;
};
