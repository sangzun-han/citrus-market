import React, { useEffect, useCallback, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import EditorHeader from "./editorHeader";
import EditorInfo from "./editorInfo";
import { getCookie } from "../../service/cookie";
import { getInfo } from "../../service/fetcher";

const Editor = ({ isLogin }) => {
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  // 프로필 이미지
  const [image, setImage] = useState("");
  const [uploadImage, setUploadImage] = useState([]);

  const textAreaRef = useRef();
  const imageRef = useRef();

  // textarea 높이 조절
  const handleResizeHeight = useCallback(() => {
    if (textAreaRef.current.value === null) return;
    textAreaRef.current.style.height = "38px";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";

    if (textAreaRef.current.scrollHeight > 400) {
      textAreaRef.current.style.height = 400 + "px";
      textAreaRef.current.style.overflowY = "auto";
    }
  }, []);

  // 이미지 미리보기
  const imagePreview = (event) => {
    if (imageRef.current.files.length > 3) {
      alert("이미지는 최대 3장까지 업로드 가능합니다.");
      imageRef.current.value = "";
    } else if (imageRef.current.files.length > 0) {
      const images = Array.from(imageRef.current.files);
      images.forEach((_, index) => {
        let reader = new FileReader();
        reader.onloadend = (e) => {
          setUploadImage((uploadImage) => [...uploadImage, e.target.result]);
        };
        reader.readAsDataURL(event.target.files[index]);
      });
    }
  };

  const deleteImagePreview = () => {
    setUploadImage([]);
    imageRef.current.value = "";
  };

  useEffect(() => {
    getInfo(accountName, token).then((res) => {
      setImage(res.data.profile.image);
    });
  });
  if (!isLogin) return <Redirect to={"/email-login"} />;
  return (
    <>
      <EditorHeader />
      <EditorInfo
        image={image}
        textAreaRef={textAreaRef}
        imageRef={imageRef}
        handleResizeHeight={handleResizeHeight}
        uploadImage={uploadImage}
        imagePreview={imagePreview}
        deleteImagePreview={deleteImagePreview}
      />
    </>
  );
};

export default Editor;
