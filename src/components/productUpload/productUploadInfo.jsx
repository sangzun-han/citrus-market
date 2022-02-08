import React, { useState } from "react";
import styles from "./productUploadInfo.module.css";

const ProductUploadInfo = ({
  imageRef,
  nameRef,
  priceRef,
  linkRef,
  setValid,
}) => {
  const [nameValid, setNameValid] = useState(null);
  const [priceValid, setPriceValid] = useState(null);

  // 상품명 유효성 검사
  const checkName = () => {
    if (nameRef.current.value.length >= 2 && nameRef.current.value.length <= 15)
      setNameValid(true);
    else setNameValid(false);
  };

  // 가격 유효성 검사
  const checkPrice = () => {
    const reg = /[^0-9,]/g;
    if (reg.test(priceRef.current.value)) {
      priceRef.current.value = priceRef.current.value.replace(reg, "");
    }

    if (priceRef.current.value.length === 0) setPriceValid(false);
    else setPriceValid(true);
  };

  // 가격 '원'단위로 변환
  const convertPrice = () => {
    let price = priceRef.current.value.replace(/,/g, "");
    priceRef.current.value = price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <main className={styles.container}>
      <section className={styles.product_img}>
        <h1 className={styles.title}>이미지 등록</h1>
        <div className={styles.hidden}>
          <img
            className={styles.default_img}
            src="/images/product/default.png"
            alt="default"
          />
          <label htmlFor="product-image">
            <img
              className={styles.btn_upload}
              src="/images/product/img-button.png"
              alt="img-button"
            />
            <input ref={imageRef} type="file" id="product-image" hidden />
          </label>
        </div>
      </section>

      <section className={styles.product_info}>
        <div className={styles.product_name}>
          <label htmlFor="productname">상품명</label>
          <input
            ref={nameRef}
            className={styles.input_info}
            type="text"
            placeholder="2~15자 이내여야 합니다."
            onBlur={checkName}
          />
          <span className={styles.err}>
            {nameValid == null
              ? ""
              : !nameValid
              ? "*사용자 이름은 2~15자 이내여야 합니다."
              : ""}
          </span>
        </div>

        <div className={styles.product_price}>
          <label htmlFor="price">가격</label>
          <input
            ref={priceRef}
            className={styles.input_info}
            type="text"
            placeholder="숫자만 입력 가능합니다."
            onBlur={convertPrice}
          />
        </div>

        <div className={styles.product_link}>
          <label htmlFor="link">판매 링크</label>
          <input
            ref={linkRef}
            className={styles.input_info}
            type="text"
            placeholder="URL을 입력해 주세요"
          />
        </div>
      </section>
    </main>
  );
};

export default ProductUploadInfo;
