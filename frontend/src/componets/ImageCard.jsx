import React from 'react'
import { FcLike } from "react-icons/fc";
const ImageCard = ( image ) => {

    const {name, url, likes} = image.image
    console.log(likes.length)
//   return (
//     <div>
//         <img src={url}/>
//     </div>
//   )

  return (
    <div className="flex flex-col items-center bg-[#a2d2ff] rounded-lg overflow-hidden cursor-pointer">
      <img
        src={url}
        alt={name}
        className="w-60 h-70 object-fill hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 w-full text-center flex justify-between">
        <div className="text-white">
        <FcLike className="text-2xl" />
        {likes.length}
        </div>
        <h2 className="text-md font-semibold text-white truncate">{name}</h2>
      </div>
    </div>
  );

}
export default ImageCard