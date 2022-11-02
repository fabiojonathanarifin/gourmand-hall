import axios from "axios";

const url = "http://localhost:5000";

//======================LOGIN/LOGOUT==================
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

//======================GET==========================
export const getQuote = async () => {
  const response = await axios.get(`${url}/userlist`);
  return response.data;
};

export const getIndex = async () => {
  const response = await axios.get(`${url}/index`);
  return response.data;
};

export const getRestaurants = async () => {
  const response = await axios.get(`${url}/restaurant`);
  return response.data;
};
//hasn't been it to the client side
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
};

export const submitStory = async (tagsIds, storyData) => {
  const { title, story } = storyData;
  const result = await axios({
    url: `${url}/story`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({ title, story, tags: tagsIds }),
  });
};

export const submitComment = async (commentData) => {
  const { comment } = commentData;
  const result = await axios({
    url: `${url}/comment`,
    method: "POST",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({ comment }),
  });
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
