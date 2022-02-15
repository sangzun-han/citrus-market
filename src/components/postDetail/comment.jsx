import React from "react";
import styles from "./comment.module.css";

import CommentInfo from "./commentInfo";

const Comment = ({ comments }) => {
  return (
    <div className={styles.scroll}>
      {comments &&
        comments.map((comment) => {
          return <CommentInfo key={comment.id} comment={comment} />;
        })}
    </div>
  );
};

export default Comment;
