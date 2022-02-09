import React, { useRef } from "react";
import styles from "./editorInfo.module.css";
const EditorInfo = ({ image }) => {
  const textAreaRef = useRef();

  const handleResizeHeight = () => {
    console.log(textAreaRef.current.value);
    if (textAreaRef.current.value === null) return;
    textAreaRef.current.style.height = "38px";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.profile_img}>
          <img src={image} alt="profile" />
        </div>
        <div className={styles.variable_height}>
          <textarea
            ref={textAreaRef}
            className={styles.input_area}
            placeholder="게시글 입력하기..."
            onChange={handleResizeHeight}
          />
        </div>
      </section>
    </main>
  );
};

export default EditorInfo;
