import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { productUpload, profileImageUpload } from "../../service/fetcher";
import { API_END_POINT } from "../../constants";
import { getCookie } from "../../service/cookie";
import ProductHeader from "./productHeader";
import ProductUploadInfo from "./productUploadInfo";

const ProductUpload = ({ isLogin }) => {
  const history = useHistory();

  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const linkRef = useRef();

  const token = getCookie("token");
  const [valid, setValid] = useState(false);

  const imageUpload = async () => {
    return await profileImageUpload(imageRef.current.files).then((res) => {
      return res.data.filename;
    });
  };

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  const onSubmit = () => {
    imageUpload().then((res) => {
      const productData = {
        product: {
          itemName: nameRef.current.value,
          price: priceRef.current.value.replace(/,/, "") * 1,
          link: linkRef.current.value,
          itemImage: API_END_POINT + "/" + res,
        },
      };
      productUpload(productData, token).then((res) => {
        alert("상품이 성공적으로 등록되었습니다.");
        history.push("/profile");
      });
    });
  };

  return (
    <>
      <ProductHeader valid={valid} onSubmit={onSubmit} />
      <ProductUploadInfo
        imageRef={imageRef}
        nameRef={nameRef}
        priceRef={priceRef}
        linkRef={linkRef}
        setValid={setValid}
      />
    </>
  );
};
export default ProductUpload;
