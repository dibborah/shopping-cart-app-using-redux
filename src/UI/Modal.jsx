import { createPortal } from "react-dom";
import styles from "./modal.module.css";

const Modal = ({ children, handleClose }) => {
  return createPortal(
    <div>
      <div className={styles.modalBackdrop} onClick={handleClose}></div>
      <div className={styles.modalContent}>{children}</div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
