import { editAlbum, getAlbum } from "../../services/albums";
import { useParams, Redirect } from "react-router-dom"
import { useState, useEffect } from "react"

function AlbumEdit() {
const { id } = useParams()
const [album, setAlbum] = useState({
  album: "",
  artist: "",
  release_date: "",
  price: "",
  imageURL: "",
  genre: "",
  label: "",
  description: "",
})

const [isUpdated, setIsUpdated] = useState(false)
useEffect(()=> {
  const fetchAlbum = async () => {
    const albumToEdit = await getAlbum(id)
    setAlbum(albumToEdit)
  }
  fetchAlbum()
}, [id])

const handleChange = (event) => {
  const { name, value } = event.target;
  setAlbum({
    ...album,
    [name]: value,
  });
};

const handleSubmit = async (event) => {
  event.preventDefault()
  const editedAlbum = await editAlbum(id, album)
  if (editedAlbum) {
    setIsUpdated(true)
  }
}

if (isUpdated) {
  return <Redirect to={`/albums/${id}`} />
}

return (
  <form className="edit-form" onSubmit={handleSubmit}>
      <input
        className="input-album"
        placeholder="Album"
        value={album.album}
        name="album"
        required
        autoFocus
        onChange={handleChange}
      />
      <input
        className="input-artist"
        placeholder="Artist"
        value={album.artist}
        name="artist"
        required
        onChange={handleChange}
      />
      <input
        className="input-release"
        placeholder="Release Date"
        value={album.release_date}
        name="release_date"
        required
        onChange={handleChange}
      />
      <input
        className="input-price"
        placeholder="Price"
        value={album.price}
        name="price"
        required
        onChange={handleChange}
      />
      <input
        className="input-image"
        placeholder="Image Link"
        value={album.imageURL}
        name="imageURL"
        required
        onChange={handleChange}
      />
      <input
        className="input-genre"
        placeholder="Genre"
        value={album.genre}
        name="genre"
        required
        onChange={handleChange}
      />
      <input
        className="input-label"
        placeholder="Label"
        value={album.label}
        name="label"
        required
        onChange={handleChange}
      />
      <textarea
        className="textarea-description"
        rows={10}
        placeholder="Description"
        value={album.description}
        name="description"
        required
        onChange={handleChange}
      />
      <img src={album.imageURL}></img>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
)
}

export default AlbumEdit