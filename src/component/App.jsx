import "./App.css";
import { useState } from "react";
import { fetchImage } from "../helpers/fetch";
import { SearchBar } from "./SearchBar/SearchBar";
import { Error } from "./Error/Error";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {images.length > 0 && <ImageGallery items={images} />}
    </>
  );
}
