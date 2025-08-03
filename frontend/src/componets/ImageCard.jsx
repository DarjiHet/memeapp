import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const ImageCard = (image) => {
  const { name, url, likes, _id } = image.image;

  return (
    <Link to={`/image/${_id}`}>
      <div className="w-40 md:w-56 relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-300">
        {/* Image always visible */}
        <img
          src={url}
          alt={name}
          className="w-60 h-70 object-fill transition-transform duration-500 group-hover:scale-110"
          // className="w-60 h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Soft dark overlay on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Slide-up name & like info on hover */}
        <div className="absolute bottom-[-100%] group-hover:bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-2 flex justify-between items-center text-sm transition-all duration-500">
          <div className="flex items-center gap-1">
            <FcLike className="text-lg" />
            <span>{likes.length}</span>
          </div>
          <h2 className="font-medium truncate">{name}</h2>
        </div>
      </div>
    </Link>
  );
};
export default ImageCard;
