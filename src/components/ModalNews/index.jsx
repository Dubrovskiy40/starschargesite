import styles from "./styles.module.scss";
import ModalWindow from "../ModalWindow/ModalWindow";

const ModalNews = ({ open, setOpen, data }) => {
  return (
    <ModalWindow setOpenModalWindow={setOpen} openModalWindow={open}>
      <h2>{data.header}</h2>
      <p>{data.text}</p>
      <p>{data.date}</p>
    </ModalWindow>
  );
};

export default ModalNews;
