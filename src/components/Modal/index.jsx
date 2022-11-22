import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

const Modal = ({ close, children }) => {
  return createPortal(
    <div className={styles.background} onClick={close}>
      <div className={styles.window}>
        <button className={styles.button} onClick={close}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
