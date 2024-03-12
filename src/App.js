import { useState, useEffect } from "react";
import Search from "./components/Search";
import PhotoGrid from "./components/PhotoGrid";
import Loading from "./components/Loading";
import { getPhotos } from "./services/imageServices";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPhotos([]); // Clear existing photos when query changes
    setPage(1); // Reset page to 1 when query changes
  }, [query]);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      await getPhotos(query, page).then((data) => {
        setLoading(false);
        setPhotos((prevData) => {
          if (page === 1) {
            return data;
          } else {
            return [...prevData, ...data];
          }
        });
      });
    };

    fetchPhotos();
  }, [query, page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 1
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <div>
      <Search setQuery={setQuery} />
      <PhotoGrid photos={photos} />
      {loading && <Loading />}
    </div>
  );
}

export default App;
