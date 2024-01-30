import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = "dG5L3_N7jK2vmib_YSZnWSNFPM_wV1uL5IP8cLRXGvs";
axios.defaults.baseURL = "https://api.unsplash.com";
// axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export async function fetchImage(page, query) {
  try {
    const url = `/search/photos?client_id=${API_KEY}&page=${page}&query=${query}&per_page=${20}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    toast.error("Oops, something went wrong...");
  }
}
