import { useState, useEffect } from "react";
import { getAlbums } from "../../services/albums.js";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import Search from "../../components/Search/Search.jsx"
import "./Albums.css";

function Albums(props) {
  const [albums, setAlbums] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getAlbums();
      setAlbums(albums);
      setSearchResult(albums);
    };
    fetchAlbums();
  }, []);

  const handleSearch = (e) => {
    const results = albums.filter((album) => album.album.toLowerCase().includes(e.target.value.toLowerCase()) || album.artist.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchResult(results)
  }
  const handleSubmit = (e) => e.preventDefault()

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch}/>
      <div className="album-container">
        {searchResult.map((album) => (
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
