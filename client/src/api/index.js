import axios from "axios";

const url = "http://localhost:5000";

export const getQuote = async () => {
  const response = await axios.get(`${url}/userlist`);
  return response.data;
};

// export const createPost = async () => {
//   const response = await axios({
//     url: `${url}/story`,
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//     data: JSON.stringify({ title, story }),
//   });
//   return response;
// };
