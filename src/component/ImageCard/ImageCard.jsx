import css from "./ImageCard.module.css";

export const ImageCard = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <div onClick={handleClick}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};
