import api from "./apiConfig.js";

export const getAlbums = async () => {
  try {
    const response = await api.get("/albums");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAlbum = async (id) => {
  try {
    const response = await api.get(`/albums/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAlbum = async (album) => {
  try {
    const response = await api.post('/albums', album)
    return response.data
  } catch (error) {
    throw error
  }
}