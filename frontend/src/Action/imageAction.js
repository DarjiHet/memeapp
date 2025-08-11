import axios from "axios";
import { loadImages } from "../utils/imageSlice";
import { loadUserImages, deleteUserImage } from "../utils/userImagesSlice";
import { searchImage } from "../utils/imageSlice"; // adjust path as

// const baseUrl = "http://localhost:3000/api/v1/";
const baseUrl = "https://memeapp-sq1n.onrender.com/api/v1/";

export const getImages = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${baseUrl}allimages`, {
        withCredentials: true,
      });

      dispatch(loadImages(result.data.images));
    } catch (error) {
      throw error;
    }
  };
};

export const getImageById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}image/${id}`, {
      withCredentials: true,
    });
    return response.data.image;
  } catch (error) {
    console.error("Error fetching image by ID:", error);
    return null;
  }
};

export const likeImage = async (id) => {
  try {
    const response = await axios.post(
      `${baseUrl}image/${id}`,
      {},
      {
        withCredentials: true, // if you use cookies or sessions
      }
    );
    return response.data; // expected to return updated image or like status
  } catch (error) {
    console.error("Error liking image:", error);
    throw error;
  }
};

export const getUserImages = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}getimages`, {
      withCredentials: true,
    });

    // Destructure both images and count
    const { images, count } = response.data;

    dispatch(loadUserImages({ images, count }));
  } catch (error) {
    console.error("Error fetching user images:", error);
  }
};

export const deleteImage = (id) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}image/${id}`, {
      withCredentials: true,
    });
    dispatch(deleteUserImage(id));
  } catch (error) {
    console.error("Failed to delete image:", error);
  }
};

export const uploadImage = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}uploadimage`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch(loadImages());

    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Image upload failed." };
  }
};

export const searchImages = (keyword) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseUrl}searchimage`,
      { keyword }, // ✅ sending keyword in request body
      { withCredentials: true }
    );

    dispatch(searchImage(response.data.images)); // assuming backend returns { images: [...] }
  } catch (error) {
    console.error("Search failed:", error.message);
    throw error;
  }
};
