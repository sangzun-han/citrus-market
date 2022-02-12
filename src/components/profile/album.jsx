import React from "react";
import styles from "./album.module.css";

const Album = () => {
  return (
    <section className={styles.album}>
      <div>
        <img src="/assets/post-img-example.png" alt="img" />
      </div>
    </section>
  );
};
export default Album;
