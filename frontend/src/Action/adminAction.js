import axios from "axios";
import { loadUsers } from "../utils/adminSlice"
import { loadImages } from "../utils/imageSlice";

const baseUrl = "http://localhost:3000/api/v1/";

export const loadAdminUsers = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${baseUrl}admin/getuser`, {
                withCredentials: true,
            });
            dispatch(loadUsers(res.data.allUser));
        } catch (error) {
            console.log('User not loaded');
        }
    }
}

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${baseUrl}admin/delete/user/${userId}`, {
        withCredentials: true,
      });

      // Re-fetch updated user list
      const res = await axios.get(`${baseUrl}admin/getuser`, {
        withCredentials: true,
      });

      dispatch(loadUsers(res.data.allUser));
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };
};

export const deleteAdminImage = (imageId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`${baseUrl}admin/delete/image/${imageId}`, {
        withCredentials: true,
      });
      console.log("Image deleted successfully:", res.data);
      const result = await axios.get(`${baseUrl}allimages`, {
        withCredentials: true,
      });

      dispatch(loadImages(result.data.images));
    } catch (error) {
      console.error("Failed to delete image", error);
    }
  };
};