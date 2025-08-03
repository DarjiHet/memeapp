import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages, deleteImage } from "../Action/imageAction";
import { logOut } from '../Action/userAction'
import ImageCard from "./ImageCard";
import { FaUserCircle, FaTrashAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import UploadImage from "./UploadImage";

const Profile = () => {
  const dispatch = useDispatch();
  const userImagesState = useSelector((state) => state.userImage);
  const { images: userImages, count } = userImagesState;
  const user = useSelector((state) => state.user);

  console.log(userImagesState)

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserImages());
  }, [dispatch]);

  const handleDelete = (id) => {

    try {
     if (window.confirm("Are you sure you want to delete this image?")) {
      dispatch(deleteImage(id)); // 
      console.log("Delete image ID:", id);
      toast.success("Image deleted successful!");
    } 
    } catch (error) {
      toast.error("Image not deleted");
    }
  };

  const handleLogOut = () =>{

    try {
     if(window.confirm("Are you sure you want to log out?")){
      dispatch(logOut());
      navigate('/')
      toast.success("Logout successful!");
    } 
    } catch (error) {
      toast.error("logOut failed");
    }
  }

  return (
    <div className="min-h-screen bg-[#e0f7ff] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Profile Info */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-5xl text-gray-500" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {user?.name}
              </h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
          <button className="font-semibold hover:text-[#ffafcc] transition" onClick={handleLogOut}>
          <IoLogOut className="text-3xl cursor-pointer" title={"logOut"}/>
          </button>
        </div>

        <div className="mt-4 mb-4">
          <UploadImage />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
            My Uploaded Images{" "}
            <span className="text-blue-600">({count})</span>
        </h1>

        {/* Image Grid */}
        {!userImages ? (
          <p className="text-center text-lg text-gray-600">Loading...</p>
        ) : userImages?.length === 0 ? (
          <p className="text-center text-gray-600">
            You haven't uploaded any images yet.
          </p>
        ) : (
          <div className="flex justify-center items-center gap-x-20 gap-y-20 flex-wrap">
            {userImages.map((image) => (
              <div key={image._id} className="relative group">
                <ImageCard image={image} />

                {/* Delete icon overlay */}
                <button
                  title="delete Image"
                  onClick={() => handleDelete(image._id)}
                  className="cursor-pointer absolute top-2 right-2 bg-white p-2 rounded-full shadow-md text-red-600 transition duration-200 z-10"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;