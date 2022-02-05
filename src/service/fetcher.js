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

const postConfigWithToken = (url, token) => {
  return {
    method: "POST",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  };
};

const getConfigWithToken = (url, token) => {
  return {
    method: "GET",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  };
};

export const login = async (userData) => {
  const res = await axios(postConfig("/user/login", userData));
  return res;
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

export const userSearch = async (keyword, token) => {
  const res = await axios(
    getConfigWithToken(`/user/searchuser/?keyword=${keyword}`, token)
  );
  return res;
};

export const getInfo = async (accountName, token) => {
  const res = await axios(getConfigWithToken(`/profile/${accountName}`, token));
  return res;
};

export const userFollow = async (accountName, token) => {
  const res = await axios(
    postConfigWithToken(`/profile/${accountName}/follow`, token)
  );
  return res;
};

export const userUnFollow = async (accountName, token) => {
  const res = await axios(
    postConfigWithToken(`/profile/${accountName}/unfollow`, token)
  );
  return res;
};
