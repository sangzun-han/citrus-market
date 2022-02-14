import React, { useEffect, useState } from "react";
import { getPostDetail } from "../../service/fetcher";
import { getCookie } from "../../service/cookie";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const postId = useParams();
  const token = getCookie("token");
  const [post, setPost] = useState("");

  useEffect(() => {
    getPostDetail(postId.id, token).then((res) => {
      setPost(res.data.post);
    });
  });
  return (
    <div>
      <h1>PostDetail</h1>
    </div>
  );
};

export default PostDetail;
