import React, { useEffect, useRef, useState } from "react";
import {
  getComment,
  getInfo,
  getPostDetail,
  uploadComment,
} from "../../service/fetcher";
import { getCookie } from "../../service/cookie";
import { useParams, Redirect } from "react-router-dom";
import ProfileHeader from "../profile/profileHeader";
import PostDetailInfo from "./postDetailInfo";
import Comment from "./comment";
import CommentInput from "./commentInput";

const PostDetail = ({ isLogin }) => {
  const { postID } = useParams();
  const token = getCookie("token");
  const accountName = getCookie("accountname");
  const inputRef = useRef("");
  const [modal, setModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [post, setPost] = useState({});

  const onComment = (event) => {
    event.preventDefault();
    const commentData = {
      comment: {
        content: inputRef.current.value,
      },
    };
    uploadComment(postID, commentData, token).then((res) => {
      if (res.data.comment) inputRef.current.value = "";
    });
  };

  useEffect(() => {
    getPostDetail(postID, token).then((res) => {
      setPost(res.data.post);
    });

    getInfo(accountName, token).then((res) => {
      setProfileImage(res.data.profile.image);
    });

    getComment(postID, token).then((res) => {
      setComments(res.data.comments);
    });
  }, [comments, accountName, postID, token]);

  if (!isLogin) return <Redirect to={"/email-login"} />;

  return (
    <>
      <ProfileHeader modal={modal} setModal={setModal} />
      {post.author && <PostDetailInfo post={post} />}
      {comments && <Comment comments={comments} />}
      {profileImage && (
        <CommentInput
          profileImage={profileImage}
          inputRef={inputRef}
          onComment={onComment}
        />
      )}
    </>
  );
};

export default PostDetail;
