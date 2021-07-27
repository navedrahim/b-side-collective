import { useState, useEffect } from "react";
import { getAlbums } from "../../services/albums.js";
import { Link } from "react-router-dom";
import { AZ, ZA, AZartist, ZAartist } from "../../utils/sort.js";
import Layout from "../../components/Layout/Layout.jsx";
import Search from "../../components/Search/Search.jsx";
import Sort from "../../components/Sort/Sort.jsx";
import "./Albums.css";

function Albums(props) {
  const [albums, setAlbums] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getAlbums();
      setAlbums(albums);
      setSearchResult(albums);
    };
    fetchAlbums();
  }, []);

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'album-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'album-descending':
        setSearchResult(ZA(searchResult))
        break
      case 'artist-ascending':
        setSearchResult(AZartist(searchResult))
        break
      case 'artist-descending':
        setSearchResult(ZAartist(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (e) => {
    const results = albums.filter((album) => album.album.toLowerCase().includes(e.target.value.toLowerCase()) || album.artist.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchResult(results)
    setApplySort(true)
  }
  const handleSubmit = (e) => e.preventDefault()

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch}/>
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
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
