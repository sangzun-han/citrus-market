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
  if (res.data.message === "이메일 또는 비밀번호가 일치하지 않습니다.")
    return false;
  else return true;
};

export const checkEmail = async (userData) => {
  const res = await axios(postConfig("/user/emailvalid", userData));
  if (res.data.message === "사용 가능한 이메일 입니다.") return true;
  else if (res.data.message === "잘못된 접근입니다.") return null;
  else return false;
};

export const join = async (userData) => {
  const res = await axios(postConfig("/user", userData));
  if (res.data.message === "회원가입 성공") return true;
  else return false;
};

export const checkAccountName = async (userData) => {
  const res = await axios(postConfig("/user/accountnamevalid", userData));
  if (res.data.message === "사용 가능한 계정ID 입니다.") return true;
  else return false;
};

export const profileImageUpload = async (files) => {
  const data = new FormData();
  data.append("image", files[0], files[0].name);
  const res = await axios(postConfig("/image/uploadfile"), data);
  return res;
};
