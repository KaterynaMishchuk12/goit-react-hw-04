import { ImageCard } from "../ImageCard/ImageCard";
import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";
///////// зображення в модалці не всі гарно виглядають-завеликі
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
      <ul>
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
