import "./App.css";
import { useState } from "react";
import { fetchImage } from "../helpers/fetch";
import { SearchBar } from "./SearchBar/SearchBar";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async (query) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchImage(query);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadmore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      <LoadMoreBtn onClick={loadmore} />
    </>
  );
}
