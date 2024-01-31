import { ImageCard } from "../ImageCard/ImageCard";
import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";
///////// з модалкою щось поки не виходить
export const ImageGallery = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} onClick={openModal} />
          </li>
        ))}
      </ul>
      <ImageModal onRequestClose={closeModal} />
    </>
  );
};
