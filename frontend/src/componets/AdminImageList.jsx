import React from "react";
import ImageCard from "./ImageCard";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminImage } from "../Action/adminAction";
import toast from "react-hot-toast";


const AdminImageList = () => {
 const images = useSelector((store) => store.image)

 const dispatch = useDispatch();

  const handleDeleteImage = (imageId) => {
    try {
     if (window.confirm("Are you sure you want to delete this image?")){
        dispatch(deleteAdminImage(imageId));
        toast.success('Image deleted');
    }   
    } catch (error) {
        toast.error('Something went wrong')
    }
  };
  return (
    <div className="flex flex-wrap gap-4 w-[80%] m-auto justify-center items-center mt-10 mb-10">
      {images.map((img) => (
        <div key={img._id} className="relative">
          {/* Delete icon positioned at top-right */}
          <button
            onClick={() => handleDeleteImage(img._id)}
            className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full shadow-md transition duration-300"
          >
            <MdDelete className="text-xl" />
          </button>

          {/* The original ImageCard stays untouched */}
          <ImageCard image={img} />
        </div>
      ))}
    </div>
  );
};

export default AdminImageList;
