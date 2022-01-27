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
