import axios from "axios";

const url = "http://localhost:5000";

export const getQuote = async () => {
  const response = await axios.get(`${url}/userlist`);
  return response.data;
};

export const getIndex = async () => {
  const response = await axios.get(`${url}/index`);
  return response.data;
};

//hasn't applied it to the client side
export const showStory = async () => {
  const response = await axios.get(`${url}/story/:id`);
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
