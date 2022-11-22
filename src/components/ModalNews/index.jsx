import styles from "./styles.module.scss";
import Modal from "../Modal";

const ModalNews = ({ close, data }) => {
  return (
    <Modal close={close}>
      <div className={styles.container}>
        <img className={styles.img} src={data.img} alt="img" />
        <h2 className={styles.title}>{data.header}</h2>
        <p className={styles.text}>
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
          {data.text}
        </p>
        <p className={styles.data}>{data.date}</p>
      </div>
    </Modal>
  );
};

export default ModalNews;
