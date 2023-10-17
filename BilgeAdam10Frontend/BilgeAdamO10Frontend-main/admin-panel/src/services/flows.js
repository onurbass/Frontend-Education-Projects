import axios from "axios";
import { flowUrl } from "./apiUrl";

export const getFlows = async () => {
  const response = await axios.get(flowUrl);
  return response.data;
};

export const getFlowCount = async () => {
  const response = await axios.get(flowUrl);
  return response.data.length;
};

export const getFlow = async (id) => {
  const response = await axios.get(`${flowUrl}/${id}`);
  return response.data;
};

export const addFlow = async (flow) => {
  const response = await axios.post(flowUrl, flow);
  return response.data;
};

export const updateFlow = async (flow) => {
  const response = await axios.put(`${flowUrl}/${flow.id}`, flow);
  return response.data;
};

export const deleteFlow = async (id) => {
  const response = await axios.delete(`${flowUrl}/${id}`);
  return response.data;
};
