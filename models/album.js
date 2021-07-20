import mongoose from "mongoose";
const Schema = mongoose.Schema

const Album = new Schema(
  {
    album: { type: String, required: true },
    artist: { type: String, required: true },
    release_date: { type: Number, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    genre: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('albums', Album)