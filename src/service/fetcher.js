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

export const checkEmail = async (userData) => {
  const res = await axios(postConfig("/user/emailvalid", userData));
  console.log(res);
  if (res.data.message === "사용 가능한 이메일 입니다.") return true;
  else if (res.data.message === "잘못된 접근입니다.") return null;
  else return false;
};
