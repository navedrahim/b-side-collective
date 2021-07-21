import { getAlbum, deleteAlbum } from "../../services/albums.js";
import { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";

function AlbumDetail() {
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
    <div className="album-detail-container">
      <h2>{album.album}</h2>
      <h2>{album.artist}</h2>
      <h2>{album.release_date}</h2>
      <h2>{album.label}</h2>
      <h2>{album.genre}</h2>
      <p>{album.description}</p>
      <h2>${album.price}</h2>
      <img src={album.imageURL} alt={album.album}></img>
      <div className="button-container">
        <Link className="edit-button" to={`/albums/${album._id}/edit`}>
          Edit
        </Link>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default AlbumDetail;
