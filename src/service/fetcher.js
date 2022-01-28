import axios from "axios";
import { API_END_POINT } from "../constants";

const postConfig = (url, data) => {
  return {
    method: "POST",
    url: API_END_POINT + url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
};

export const login = async (userData) => {
  const res = await axios(postConfig("/user/login", userData));
  return res.data;
};

export const checkEmail = async (url, email) => {
  const data = {
    user: {
      email,
    },
  };

  const res = await axios(postConfig(url, data));
  return res.data;
};
