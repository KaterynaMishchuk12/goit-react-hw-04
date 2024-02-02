import "./App.css";
import { useState, useEffect } from "react";
import { fetchImages } from "../helpers/fetch";
import { SearchBar } from "./SearchBar/SearchBar";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Toaster } from "react-hot-toast";

export function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [totalPages, setTotalPages] = useState(0);

  const searchImages = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImages(query, page);
        // setTotalPages(fetchedData.total_pages);

        // if (page <= fetchedData.total_pages) {
        setImages((prevImages) => [...prevImages, ...fetchedData]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchImages} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      {/* <Toaster /> */}
    </>
  );
}

// useEffect(() => {
//   const numberOfLastPage = Math.ceil(fetchedData.results / perPage);
//   if (page === numberOfLastPage) {
//   }
// });

// const noImagesFound = (fetchedData) => {
//   if (fetchedData.results.length === 0) {
//     toast.notify("No images found according to your request");
//   }
// };
// console.log(noImagesFound);
