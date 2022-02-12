import React from "react";

const Modal = () => {
  return (
    <section className={styles.logout_section}>
      <div className={styles.logout_message}>
        <h1>로그아웃하시겠어요?</h1>
      </div>
      <div className={styles.btn_member}>
        <button className={styles.btn_cancle}>
          <span>취소</span>
        </button>
        <button className={styles.btn_logout}>
          <span>삭제</span>
        </button>
      </div>
    </section>
  );
};

export default Modal;
