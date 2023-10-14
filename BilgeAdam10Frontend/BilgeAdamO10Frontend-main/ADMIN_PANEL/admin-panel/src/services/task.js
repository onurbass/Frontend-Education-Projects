import axios from "axios";
import { taskUrl } from "./apiUrl";

export const getTasks = async () => {
  const response = await axios.get(taskUrl);
  return response.data;
};

export const getTaskCount = async () => {
  const response = await axios.get(taskUrl);
  return response.data.length;
};

export const addTasks = async (tasks) => {
  const response = await axios.post(taskUrl, tasks);
  return response.data;
};

export const updateTasks = async (tasks) => {
  const response = await axios.put(`${taskUrl}/${tasks.id}`, tasks);
  return response.data;
};

export const deleteTasks = async (id) => {
  const response = await axios.delete(`${taskUrl}/${id}`);
  return response.data;
};
