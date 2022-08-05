import axios from "axios";

const url = "http://localhost:5000";

export const getQuote = async () => {
  const response = await axios.get(`${url}/userlist`);
  return response.data;
};
