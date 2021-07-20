import Album from "../models/album.js"

export const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find()
    res.json(albums)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getAlbum = async (req, res) => {
  try {
    const { id } = req.params
    const album = await Album.findById(id)
    // look into .populate method for this function
    if (album) {
      return res.json(album)
    } 
    res.status(404).json({ message: "Album not found."})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message})
  }
}

export const createAlbum = async (req, res) => {
  try {
    const newAlbum = new Album(req.body)
    await newAlbum.save()
    res.status(201).json(newAlbum)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const updateAlbum = async (req, res) => {
  const { id } = req.params
  const album = await Album.findByIdAndUpdate(id, req.body)
  res.status(200).json(album)
}

export const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params
    const deletedAlbum = await Album.findByIdAndDelete(id)
    if (deletedAlbum) {
      return res.status(200).send("Album deleted.")
    }
    throw new Error("Album not found.")
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}