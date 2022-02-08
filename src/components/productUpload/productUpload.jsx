import React, { useState, useRef } from "react";
import { getCookie } from "../../service/cookie";
import ProductHeader from "./productHeader";
import ProductUploadInfo from "./productUploadInfo";

const ProductUpload = () => {
  const token = getCookie("token");
  const accountName = getCookie("accountname");

  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const linkRef = useRef();

  const [valid, setValid] = useState(false);

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
