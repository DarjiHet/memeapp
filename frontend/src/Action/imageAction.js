import axios from "axios";
import {loadImages} from '../utils/imageSlice'

const baseUrl = "http://localhost:3000/api/v1/";

export const getImages = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get(
                `${baseUrl}allimages`,
                {
                    withCredentials: true,
                }
            );

            dispatch(loadImages(result.data.images))
        } catch (error) {
            throw error;
        }
    }
}