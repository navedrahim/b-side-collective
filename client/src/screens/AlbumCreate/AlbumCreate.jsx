import { useState } from "react";
import { createAlbum } from "../../services/albums";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./AlbumCreate.css";

const AlbumCreate = (props) => {
  const [album, setAlbum] = useState({
    album: "",
    artist: "",
    release_date: "",
    price: "",
    imageURL: "",
    genre: "",
    label: "",
    description: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAlbum({
      ...album,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createAlbum(album);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/albums`} />;
  }

  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="create-album"
          placeholder="Album"
          value={album.album}
          name="album"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="create-artist"
          placeholder="Artist"
          value={album.artist}
          name="artist"
          required
          onChange={handleChange}
        />
        <input
          className="create-release"
          placeholder="Release Date"
          value={album.release_date}
          name="release_date"
          required
          onChange={handleChange}
        />
        <input
          className="create-price"
          placeholder="Price"
          value={album.price}
          name="price"
          required
          onChange={handleChange}
        />
        <input
          className="input-image"
          placeholder="Image URL"
          value={album.imageURL}
          name="imageURL"
          required
          onChange={handleChange}
        />
        <input
          className="create-genre"
          placeholder="Genre"
          value={album.genre}
          name="genre"
          required
          onChange={handleChange}
        />
        <input
          className="create-label"
          placeholder="Label"
          value={album.label}
          name="label"
          required
          onChange={handleChange}
        />
        <textarea
          className="create-textarea"
          rows={10}
          placeholder="Description"
          value={album.description}
          name="description"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          ADD
        </button>
      </form>
    </Layout>
  );
};

export default AlbumCreate;
