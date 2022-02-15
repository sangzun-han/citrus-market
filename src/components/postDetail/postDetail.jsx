import React, { useEffect, useState } from "react";
import { getPostDetail } from "../../service/fetcher";
import { getCookie } from "../../service/cookie";
import { useParams } from "react-router-dom";
import ProfileHeader from "../profile/profileHeader";
import PostDetailInfo from "./postDetailInfo";
import { Redirect } from "react-router-dom";
import Comment from "./comment";

const PostDetail = ({ isLogin }) => {
  const { postID } = useParams();
  const token = getCookie("token");
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostDetail(postID, token).then((res) => {
      setPost(res.data.post);
    });
  }, [postID, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

  return (
    <>
      <ProfileHeader modal={modal} setModal={setModal} />
      {post.author && <PostDetailInfo post={post} />}
      <Comment />
    </>
  );
};

export default PostDetail;
