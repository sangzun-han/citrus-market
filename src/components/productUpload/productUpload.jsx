import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProductHeader from "./productHeader";
import ProductUploadInfo from "./productUploadInfo";

const ProductUpload = ({ isLogin }) => {
  const history = useHistory();

  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const linkRef = useRef();

  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      history.push("/email-login");
    }
  }, [isLogin, history]);

  return (
    <>
      <ProductHeader valid={valid} />
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
