import React from "react";
import AlbumInfo from "./albumInfo";
import PostAreaTop from "./postAreaTop";
import styles from "./album.module.css";

const Album = ({ posts, album, setAlbum }) => {
  return (
    <>
      <PostAreaTop album={album} setAlbum={setAlbum} />
      <div className={styles.album}>
        {posts.map((post) => {
          return <AlbumInfo key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};
export default Album;
