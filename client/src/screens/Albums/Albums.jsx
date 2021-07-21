import { useState, useEffect } from "react";
import { getAlbums } from "../../services/albums.js";

function Albums() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getAlbums();
      setAlbums(albums);
    };
    fetchAlbums();
  }, []);

  return (
    <div>
      {albums.map((album) => (
        <div>
          <h2>{album.album}</h2>
          <h2>{album.artist}</h2>
        </div>
      ))}
    </div>
  );
}

export default Albums;
