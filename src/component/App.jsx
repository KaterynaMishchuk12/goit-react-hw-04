import "./App.css";
import { useState, useEffect } from "react";
import { fetchImages } from "../helpers/fetch";
import { SearchBar } from "./SearchBar/SearchBar";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";

export function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const searchImages = async (newQuery) => {
    setQuery(newQuery);

    setCurrentPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImages(query, currentPage);
        setTotalPages(fetchedData.total_pages);

        if (fetchedData.results.length === 0) {
          toast.error("No matches found according to your request");
          return;
        }

        setImages((prevImages) => [...prevImages, ...fetchedData.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, currentPage]);

  const showLoadMoreBtn =
    images.length > 0 && !loading && currentPage < totalPages;

  return (
    <>
      <SearchBar onSearch={searchImages} />

      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {showLoadMoreBtn && <LoadMoreBtn onClick={loadMore} />}
      <Toaster />
    </>
  );
}
