import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../Action/imageAction";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";


const Images = () => {
  const dispatch = useDispatch(); // ✅ Get dispatch function
  const images = useSelector((store) => store.image);
  const user = useSelector((store) => store.user);
  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    dispatch(getImages());
  }, []);



  // ------------
//   useEffect(() => {
//   if (!images || !user) return;
//   if (user.role === "admin") {
//     setAdmin(true);
//   }
// }, [images, user]);



  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <ImageSearch />
      <div className="flex flex-wrap gap-6 justify-center w-[90%] mx-auto">
        {images &&
          images.map((image) => (
            <div
              key={image._id}
              className="border-0 rounded-lg"
            >
              <ImageCard image={image} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Images;