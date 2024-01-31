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

export const ImageModal = ({ isOpen, onCloseModal, item }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      contentLabel="Image Modal"
      overlayClassName={css.overlay}
      style={customStyles}
    >
      <button onClick={onCloseModal}>
        <IoClose />
      </button>
      <img src={item.urls.full} alt={item.alt_description} />
    </Modal>
  );
};
