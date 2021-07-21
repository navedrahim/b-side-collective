import { useState, useEffect } from "react";
import { getAlbums } from "../../services/albums.js";
import { Link } from "react-router-dom"

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
        <Link to={`/albums/${album._id}`}>
          <div key={album._id}>
            <h2>{album.album}</h2>
            <h2>{album.artist}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Albums;
