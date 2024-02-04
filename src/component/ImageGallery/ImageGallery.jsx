import { ImageCard } from "../ImageCard/ImageCard";
import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (item) => {
    setSelectedImage(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <>
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} onClick={() => openModal(item)} />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <ImageModal
          isOpen={isOpen}
          image={selectedImage}
          onCloseModal={closeModal}
        />
      )}
    </>
  );
};
