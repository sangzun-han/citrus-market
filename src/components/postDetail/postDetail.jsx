import React, { useEffect, useState } from "react";
import { getInfo, getPostDetail } from "../../service/fetcher";
import { getCookie } from "../../service/cookie";
import { useParams } from "react-router-dom";
import ProfileHeader from "../profile/profileHeader";
import PostDetailInfo from "./postDetailInfo";
import { Redirect } from "react-router-dom";
import Comment from "./comment";
import CommentInput from "./commentInput";

const PostDetail = ({ isLogin }) => {
  const { postID } = useParams();
  const token = getCookie("token");
  const accountName = getCookie("accountname");
  const [modal, setModal] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostDetail(postID, token).then((res) => {
      setPost(res.data.post);
    });

    getInfo(accountName, token).then((res) => {
      setProfileImage(res.data.profile.image);
    });
  }, [accountName, postID, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

  return (
    <>
      <ProfileHeader modal={modal} setModal={setModal} />
      {post.author && <PostDetailInfo post={post} />}
      <Comment postID={postID} token={token} />
      {profileImage && <CommentInput profileImage={profileImage} />}
    </>
  );
};

export default PostDetail;
