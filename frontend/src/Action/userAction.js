import axios from "axios";
import { addUser, setUser } from "../utils/userSlice";

const baseUrl = "http://localhost:3000/api/v1/";

export const registerUser = (name, email, password, navigate) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        `${baseUrl}register`,
        { name, email, password }, // ✅ Properly structured payload
        {
          withCredentials: true, // ✅ Needed if using cookies
        }
      );
    
      dispatch(addUser(result.data.user)); // ✅ Use dispatch passed from thunk
      navigate('/images')
    return result.data;
    } catch (error) {
     throw error;
    }
  };
};


export const loginUser = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        `${baseUrl}login`,
        { email, password }, // ✅ Properly structured payload
        {
          withCredentials: true, // ✅ Needed if using cookies
        }
      );
    
      dispatch(setUser(result.data.user)); // ✅ Use dispatch passed from thunk
      navigate('/images')
    return result.data;
    } catch (error) {
     throw error;
    }
  };
};

export const loadUser = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}getuser`, {
        withCredentials: true,
      });
      dispatch(setUser(res.data.user));
    } catch (err) {
      console.log("User not logged in or token expired");
    }
  };
};
