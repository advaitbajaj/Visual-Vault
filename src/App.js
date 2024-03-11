import { useState, useEffect } from "react";
import Search from "./components/Search";
import PhotoGrid from "./components/PhotoGrid";
import { getPhotos } from "./services/imageServices";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    const fetchPhotos = async () => {
      await getPhotos(query).then((data) => {
        console.log("PHOTOS:" + { ...data });
        setPhotos(data);
      });

      console.log("QUERY:" + query);
    };

    fetchPhotos();
  }, [query]);

  return (
    <div>
      <Search setQuery={setQuery} />
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default App;
