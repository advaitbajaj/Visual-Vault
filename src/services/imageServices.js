import axios from "axios";
const API_KEY = process.env.REACT_APP_ACCESS_KEY;
const BASE_URL = "https://api.unsplash.com/";

const getPhotos = async (searchParams) => {
  let url;
  if (searchParams.query) {
    url = new URL("search/photos", BASE_URL);
  } else {
    url = new URL("photos", BASE_URL);
  }

  url.search = new URLSearchParams({
    ...searchParams,
    client_id: API_KEY,
    per_page: 12,
  });

  console.log("URL:" + url);

  if (searchParams.query) {
    const { data } = await axios.get(url);
    return data.results;
  } else {
    const { data } = await axios.get(url);
    return data;
  }
};

export { getPhotos };
