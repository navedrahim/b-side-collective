import { useState, useEffect } from "react";
import { getAlbums } from "../../services/albums.js";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import "./Albums.css";

function Albums(props) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getAlbums();
      setAlbums(albums);
    };
    fetchAlbums();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="album-container">
        {albums.map((album) => (
          <div className="album-cards" key={album._id}>
            <Link to={`/albums/${album._id}`}>
              <div className="albums-card">
                <img
                  className="albums-cover"
                  src={album.imageURL}
                  alt={album.album}
                />
                <div className="albums-name">{album.album}</div>
                <div className="albums-artist">{album.artist}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Albums;
