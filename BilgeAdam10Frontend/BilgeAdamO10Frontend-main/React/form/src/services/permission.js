import axios from "axios";

const PERMISSION_URL = "http://localhost:5000/permission";

/**
 * DB'ye permission eklemek için kullanılır.
 * @param {object} data eklenecek permission'ın bilgileri
 * @returns eklenen permission bilgileri
 */
export const addPermission = async (data) => {
  const response = await axios.post(PERMISSION_URL, data);
  return response.data;
};

/**
 * DB'den permission'lar çekilir.
 * @returns tüm permission'ları veren array
 */
export const getPermissions = async () => {
  const response = await axios.get(PERMISSION_URL);
  return response.data;
};