import React from "react";
import styles from "./product.module.css";
import ProductInfo from "./productInfo";

const Product = ({ products }) => {
  return (
    <section className={styles.product}>
      <h1 className={styles.title}>판매 중인 상품</h1>
      <div className={styles.wrap}>
        {products.map((product) => {
          return <ProductInfo key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};
export default Product;
