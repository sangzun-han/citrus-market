import React from "react";
import styles from "./productUploadInfo.module.css";

const ProductUploadInfo = () => {
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
            <input type="file" id="product-image" hidden />
          </label>
        </div>
      </section>

      <section className={styles.product_info}>
        <div className={styles.product_name}>
          <label htmlFor="productname">상품명</label>
          <input
            className={styles.input_info}
            type="text"
            placeholder="2~15자 이내여야 합니다."
          />
        </div>

        <div className={styles.product_price}>
          <label htmlFor="price">가격</label>
          <input
            className={styles.input_info}
            type="text"
            placeholder="숫자만 입력 가능합니다."
          />
        </div>

        <div className={styles.product_link}>
          <label htmlFor="link">판매 링크</label>
          <input
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
