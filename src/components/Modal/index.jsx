import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

const Modal = ({ close }) => {
  return createPortal(
    <div className={styles.background}>
      <div className={styles.window}>
        <button onClick={() => close()}>×</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
