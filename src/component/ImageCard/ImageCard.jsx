export const ImageCard = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <div onClick={handleClick}>
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
};
