import React, { useEffect, useState } from "react";
import { getComment } from "../../service/fetcher";
import CommentInfo from "./commentInfo";

const Comment = ({ postID, token }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComment(postID, token).then((res) => {
      setComments(res.data.comment);
    });
  }, [postID, token]);

  return (
    <>
      {comments &&
        comments.map((comment) => {
          return <CommentInfo key={comment.id} comment={comment} />;
        })}
    </>
  );
};

export default Comment;
