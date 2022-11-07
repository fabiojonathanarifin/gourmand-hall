import axios from "axios";

const url = "http://localhost:5000";

//======================LOGIN/LOGOUT==================
export const loginUser = async (data) => {
  const { username, password } = data;

  const myData = data;
  console.log(myData);
  const result = await axios({
    url: `${url}/login`,
    method: "POST",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      username,
      password,
    }),
  });
  return result;
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

//======================GET==========================
export const getQuote = async () => {
  const response = await axios.get(`${url}/userlist`);
  return response.data;
};

export const getIndex = async () => {
  const response = await axios.get(`${url}/stories/index`);
  return response.data;
};

export const getRestaurants = async () => {
  const response = await axios.get(`${url}/restaurant`);
  return response.data;
};

//grab comments using post id params
export const getComments = async (id) => {
  const response = await axios({
    url: `${url}/story/${id}/comments`,
    method: "GET",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return response.data;
};
//hasn't been it to the client side
export const showStory = async (id) => {
  const response = await axios({
    url: `${url}/stories/` + id,
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

//======================POST==========================
export const submitRegistration = async (userRegistrationData) => {
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    confirmPassword,
    bio,
    twitter,
    linkedIn,
    facebook,
    instagram,
  } = userRegistrationData;
  const result = await axios({
    url: `${url}/register`,
    method: "POST",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      firstName,
      lastName,
      email,
      username,
      password,
      confirmPassword,
      bio,
      socialMedia: { twitter, linkedIn, facebook, instagram },
    }),
  });
  return result;
};

export const submitStory = async (tagsIds, storyData) => {
  const { title, story } = storyData;
  const result = await axios({
    url: `${url}/stories/story`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({ title, story, tags: tagsIds }),
  });
};

export const submitComment = async (commentData, id) => {
  const { comment } = commentData;
  const result = await axios({
    url: `${url}/story/` + id,
    method: "POST",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({ comment, story: id }),
  });
  return result;
};

export const submitAdditionalData = async (additionalData) => {
  const { state, city, favCuisine, favFood, birthday } = additionalData;
  const result = await axios({
    url: `${url}/addinfo`,
    method: "POST",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      state,
      city,
      favCuisine,
      favFood,
      birthday,
    }),
  });
  return result;
};
