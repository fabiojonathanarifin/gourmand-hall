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
export const showStory = async (id) => {
  const response = await axios({
    url: `${url}/story/` + id,
    method: "GET",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return response.data;
};

export const loginUser = async () => {
  const response = await axios.get(`${url}/login`);
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios({
    url: `${url}/logout`,
    method: "GET",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return response.data;
};

export const getUser = async () => {
  const response = await axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:5000/user",
  });
  return response.data;
};

// export const getUser = async () => {
//   const response = await axios.get(`${url}/user`);
//   return response;
// };

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
