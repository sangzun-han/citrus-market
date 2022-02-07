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

const putConfgWithToken = (url, token, data) => {
  return {
    method: "PUT",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
    data,
  };
};

// 로그인
export const login = async (userData) => {
  const res = await axios(postConfig("/user/login", userData));
  return res;
};

// 이메일(로그인 아이디) 검사
export const checkEmail = async (userData) => {
  const res = await axios(postConfig("/user/emailvalid", userData));
  if (res.data.message === "사용 가능한 이메일 입니다.") return true;
  else if (res.data.message === "잘못된 접근입니다.") return null;
  else return false;
};

// 회원가입
export const join = async (userData) => {
  const res = await axios(postConfig("/user", userData));
  if (res.data.message === "회원가입 성공") return true;
  else return false;
};

// 계정 중복 검사
export const checkAccountName = async (userData) => {
  const res = await axios(postConfig("/user/accountnamevalid", userData));
  if (res.data.message === "사용 가능한 계정ID 입니다.") return true;
  else return false;
};

// 회원가입 시 프로필 이미지 업로드
export const profileImageUpload = async (files) => {
  const data = new FormData();
  data.append("image", files[0], files[0].name);
  const res = await axios(postConfig("/image/uploadfile"), data);
  return res;
};

// 유저 검색
export const userSearch = async (keyword, token) => {
  const res = await axios(
    getConfigWithToken(`/user/searchuser/?keyword=${keyword}`, token)
  );
  return res;
};

// 내 정보 가져오기
export const getInfo = async (accountName, token) => {
  const res = await axios(getConfigWithToken(`/profile/${accountName}`, token));
  return res;
};

// 팔로우
export const userFollow = async (accountName, token) => {
  const res = await axios(
    postConfigWithToken(`/profile/${accountName}/follow`, token)
  );
  return res;
};

// 언팔로우
export const userUnFollow = async (accountName, token) => {
  const res = await axios(
    postConfigWithToken(`/profile/${accountName}/unfollow`, token)
  );
  return res;
};

// 프로필 수정
export const profileUpdate = async (userData, token) => {
  const res = await axios(putConfgWithToken("/user", userData, token));
  return res;
};
