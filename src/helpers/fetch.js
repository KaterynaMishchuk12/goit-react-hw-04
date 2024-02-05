import axios from "axios";

const API_KEY = "dG5L3_N7jK2vmib_YSZnWSNFPM_wV1uL5IP8cLRXGvs";
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
  const url = `/search/photos?client_id=${API_KEY}&page=${page}&query=${query}&per_page=${20}`;
  const response = await axios.get(url);
  return response.data;
};
