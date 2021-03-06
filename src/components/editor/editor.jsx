import React, { useEffect, useCallback, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import EditorHeader from "./editorHeader";
import EditorInfo from "./editorInfo";
import { getCookie } from "../../service/cookie";
import { getInfo, imagesUpload, post } from "../../service/fetcher";
import { useHistory } from "react-router-dom";

const Editor = ({ isLogin }) => {
  const history = useHistory();
  const accountName = getCookie("accountname");
  const token = getCookie("token");
  // 프로필 이미지
  const [image, setImage] = useState("");
  const [uploadImage, setUploadImage] = useState([]);
  const [valid, setValid] = useState(false);

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
    checkValid();
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
      checkValid();
    }
  };

  // 이미지 1개일 때 미리보기 삭제
  const deleteImagePreview = () => {
    setUploadImage([]);
    imageRef.current.value = "";
    checkValid();
  };

  const deleteMoreImagePreview = (index) => {
    const temp = uploadImage;
    temp.splice(index, 1);
    setUploadImage(() => [...temp]);
    const dataTransfer = new DataTransfer();
    Array.from(imageRef.current.files)
      .filter((_, idx) => idx !== index)
      .forEach((file) => {
        dataTransfer.items.add(file);
      });
    imageRef.current.files = dataTransfer.files;
  };

  const imageUpload = async () => {
    return imagesUpload(imageRef.current.files).catch(() => {
      alert("이미지 업로드 실패!");
    });
  };

  const checkValid = () => {
    if (imageRef.current.files.length && textAreaRef.current.value)
      setValid(true);
    else setValid(false);
  };

  const posting = async (postData) => {
    await post(postData, token).then((res) => {
      if (res.status !== 200) {
        alert("에러 : ", res.status);
      } else {
        alert("게시글이 등록되었습니다.");
        history.push("/profile");
      }
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      post: {
        content: textAreaRef.current.value,
        image: "",
      },
    };
    if (imageRef.current.files.length) {
      imageUpload(imageRef.current.files).then((res) => {
        postData.post.image = res;
        posting(postData);
      });
    } else {
      posting(postData);
    }
  };

  useEffect(() => {
    getInfo(accountName, token).then((res) => {
      setImage(res.data.profile.image);
    });
  });
  if (!isLogin) return <Redirect to={"/email-login"} />;
  return (
    <>
      <EditorHeader valid={valid} onSubmit={onSubmit} />
      <EditorInfo
        image={image}
        textAreaRef={textAreaRef}
        imageRef={imageRef}
        handleResizeHeight={handleResizeHeight}
        uploadImage={uploadImage}
        imagePreview={imagePreview}
        deleteImagePreview={deleteImagePreview}
        deleteMoreImagePreview={deleteMoreImagePreview}
      />
    </>
  );
};

export default Editor;
