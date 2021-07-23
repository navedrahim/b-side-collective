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
          <div className="album-cards">
            <Link to={`/albums/${album._id}`}>
              <div className="album-card" key={album._id}>
                <img
                  className="album-cover"
                  src={album.imageURL}
                  alt={album.album}
                />
                <div className="album-name">{album.album}</div>
                <div className="album-artist">{album.artist}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Albums;
