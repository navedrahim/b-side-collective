import "./AlbumDetail.css";
import { getAlbum, deleteAlbum } from "../../services/albums.js";
import { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

function AlbumDetail(props) {
  const [album, setAlbum] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbum = async () => {
      const album = await getAlbum(id);
      setAlbum(album);
      setIsLoaded(true);
    };
    fetchAlbum();
  }, [id]);

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  const handleDelete = async () => {
    await deleteAlbum(album._id);
    setDeleted(true);
  };

  if (deleted) {
    return <Redirect to={"/albums"} />;
  }

  return (
    <Layout user={props.user}>
      <div className="album-detail-container">
        <div className="detail">
          <div className="album-name">{album.album}</div>
          <div className="artist">{album.artist}</div>
          <div className="release-date">{album.release_date}</div>
          <div className="genre">{album.genre}</div>
          <div className="label">{album.label}</div>
          <div className="description">{album.description}</div>
          <div className="price">${album.price}</div>
          <div className="button-container">
            <button className="edit-button">
              <Link to={`/albums/${album._id}/edit`}>
                EDIT
              </Link>
            </button>
            <button className="delete-button" onClick={handleDelete}>
              DELETE
            </button>
          </div>
        </div>
        <img
          className="album-detail-image"
          src={album.imageURL}
          alt={album.album}
        />
      </div>
    </Layout>
  );
}

export default AlbumDetail;
