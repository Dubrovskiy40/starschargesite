import styles from "./styles.module.scss";
import Modal from "../Modal";

const ModalNews = ({ close, data }) => {
  return (
    <Modal close={close}>
      <div className={styles.container}>
        <img className={styles.img} src={data.img} alt="img" />
        <h2 className={styles.title}>
          {data.lang === "ru" ? data.header : data.header_eng}
        </h2>
        {data.lang === "ru" ? (
          <p className={styles.text}>{data.full_text || data.text}</p>
        ) : (
          <p className={styles.text}>{data.full_text_eng || data.text_eng}</p>
        )}
        <p className={styles.data}>{data.date}</p>
      </div>
    </Modal>
  );
};

export default ModalNews;
