import axios from "axios";

const BOOK_URL = "http://localhost:5000/book";

/**
 * DB'ye book eklemek için kullanılır.
 * @param {object} data eklenecek book'ın bilgileri
 * @returns eklenen book bilgileri
 */
export const addBook = async (data) => {
  const response = await axios.post(BOOK_URL, data);
  return response.data;
};

/**
 * DB'den book'lar çekilir.
 * @returns tüm book'ları veren array
 */
export const getBooks = async () => {
  const response = await axios.get(BOOK_URL);
  return response.data;
};