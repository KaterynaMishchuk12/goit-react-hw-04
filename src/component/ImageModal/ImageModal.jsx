import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IoClose } from "react-icons/io5";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ImageModal = ({ isOpen, image, onCloseModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      contentLabel="Image Modal"
      overlayClassName={css.overlay}
      style={customStyles}
    >
      <div className={css.content}>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
      <button className={css.button} onClick={onCloseModal}>
        <IoClose />
      </button>
    </Modal>
  );
};
