import React from "react";
import styles from "./product.module.css";

const Product = () => {
  return (
    <section className={styles.product}>
      <h1 className={styles.title}>판매 중인 상품</h1>
      <div className={styles.product_info}>
        <div className={styles.product_img}>
          <img src="/images/home/symbol-logo-gray.png" alt="" />
        </div>
        <p className={styles.product_name}>애월읍 노지 감귤</p>
        <p className={styles.product_price}>35,000원</p>
      </div>
    </section>
  );
};
export default Product;
