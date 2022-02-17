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

const postConfigWithTokenAndData = (url, data, token) => {
  return {
    method: "POST",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
    data: data,
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

const putConfgWithToken = (url, data, token) => {
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

const deleteConfig = (url, token) => {
  return {
    method: "DELETE",
    url: API_END_POINT + url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
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
  const res = await axios(postConfig("/image/uploadfile", data));
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
    deleteConfig(`/profile/${accountName}/unfollow`, token)
  );
  return res;
};

// 프로필 수정
export const profileUpdate = async (user, token) => {
  const res = await axios(putConfgWithToken("/user", user, token));
  return res;
};

// 상품 등록
export const productUpload = async (productData, token) => {
  const res = await axios(
    postConfigWithTokenAndData("/product", productData, token)
  );
  return res;
};

// 상품 리스트

export const getProductList = async (accountName, token) => {
  const res = await axios(getConfigWithToken(`/product/${accountName}`, token));
  return res;
};

// 팔로워 리스트(나를 팔로우한 사용자 목록)
export const getFollowerList = async (accountName, token) => {
  const res = await axios(
    getConfigWithToken(`/profile/${accountName}/follower`, token)
  );
  return res;
};

// 팔로잉 리스트(내가 팔로우한 사용자 목록)
export const getFollowingList = async (accountName, token) => {
  const res = await axios(
    getConfigWithToken(`/profile/${accountName}/following`, token)
  );
  return res;
};

// 상품 이미지 등록

export const imagesUpload = async (files) => {
  const data = new FormData();
  for (let i = 0; i < files.length; i++) {
    data.append("image", files[i], files[i].name);
  }
  return await axios(postConfig("/image/uploadfiles", data)).then((res) =>
    res.data.map((item) => item.filename).join()
  );
};

// 게시글 작성
export const post = async (postData, token) => {
  const res = await axios(postConfigWithTokenAndData("/post", postData, token));
  return res;
};

// 나의 게시글 목록
export const getPost = async (accountName, token) => {
  const res = await axios(
    getConfigWithToken(`/post/${accountName}/userpost`, token)
  );
  return res;
};

// 게시글 삭제
export const deletePost = async (post_id, token) => {
  const res = await axios(deleteConfig(`/post/${post_id}`, token));
  if (res.data.message === "삭제되었습니다.") return true;
  else return false;
};

// 게시글 상세
export const getPostDetail = async (post_id, token) => {
  const res = await axios(getConfigWithToken(`/post/${post_id}`, token));
  return res;
};

// 댓글 작성
export const uploadComment = async (post_id, commentData, token) => {
  const res = await axios(
    postConfigWithTokenAndData(`/post/${post_id}/comments`, commentData, token)
  );
  return res;
};

// 댓글 리스트
export const getComment = async (post_id, token) => {
  const res = await axios(
    getConfigWithToken(`/post/${post_id}/comments`, token)
  );
  return res;
};

// 팔로워 게시글 목록
export const getFollowContent = async (token) => {
  const res = await axios(getConfigWithToken("/post/feed", token));
  return res;
};

// 좋아요
export const heart = async (post_id, token) => {
  const res = await axios(postConfigWithToken(`/post/${post_id}/heart`, token));
  return res;
};

// 좋아요 취소
export const unHeart = async (post_id, token) => {
  const res = await axios(deleteConfig(`/post/${post_id}/unheart`, token));
  return res;
};
