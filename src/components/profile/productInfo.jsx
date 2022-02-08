import React from "react";
import styles from "./productInfo.module.css";

const ProductInfo = ({ product }) => {
  const { itemName, itemImage, price } = product;
  const convertPrice = () => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={styles.product_info}>
      <div className={styles.product_img}>
        <img src={itemImage} alt="product" />
      </div>
      <p className={styles.product_name}>{itemName}</p>
      <p className={styles.product_price}>{convertPrice()}원</p>
    </div>
  );
};

export default ProductInfo;
