// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FcLike } from "react-icons/fc";
// import { getImageById, likeImage } from "../Action/imageAction"; // ⬅️ import the action
// import { useSelector } from "react-redux";
// const ImageDetail = () => {
//   const user = useSelector((store) => store.user);
//   const currentUserId = user?._id;
//   const { id } = useParams();
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const result = await getImageById(id);
//       setImage(result);
//       setLoading(false);
//     };

//     fetchImage();
//   }, [id]);

//   const handleLike = async () => {
//     try {
//       const result = await likeImage(id);

//       // Optimistically update the state locally
//       setImage((prevImage) => {
//         const alreadyLiked = prevImage.likes.includes(currentUserId);

//         const updatedLikes = alreadyLiked
//           ? prevImage.likes.filter((id) => id !== currentUserId)
//           : [...prevImage.likes, currentUserId];

//         return {
//           ...prevImage,
//           likes: updatedLikes,
//         };
//       });

//       // Optional: setLiked(result.likedBy); if you're managing liked state separately
//     } catch (error) {
//       console.error("Error liking image:", error);
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-10 text-lg">Loading image...</div>;
//   }

//   if (!image) {
//     return (
//       <div className="text-center py-10 text-red-500">Image not found</div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#e0f7ff] px-4 py-10 flex justify-center">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl w-full flex flex-col">
//         {/* Image on Top */}
//         <div className="w-full">
//           <img
//             src={image.url}
//             alt={image.name}
//             className="w-full object-fill transition-transform duration-500 hover:scale-105 cursor-pointer"
//           />
//         </div>

//         {/* Details Below */}
//         <div className="p-6 flex flex-col gap-4">
//           <h1 className="text-3xl font-bold text-gray-800">{image.name}</h1>

//           <div className="text-gray-600 text-sm">
//             Uploaded on:{" "}
//             <span className="font-semibold">
//               {new Date(image.createdAt).toLocaleDateString()}
//             </span>
//           </div>

//           <button
//             onClick={handleLike}
//             className="mt-4 flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors duration-300"
//           >
//             <FcLike className={`text-3xl ${liked ? "animate-pulse" : ""}`} />
//             <span className="text-lg font-medium">
//               {image.likes.length} Likes
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageDetail;






import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { getImageById, likeImage } from "../Action/imageAction";
import { useSelector } from "react-redux";

const ImageDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [liked, setLiked] = useState(false);
  const user = useSelector((store) => store.user?._id)
  const currentUserId = user; // replace this with logic to get user ID from auth

  useEffect(() => {
    const fetchImage = async () => {
      const data = await getImageById(id);
      setImage(data);

      if (data?.likes?.includes(currentUserId)) {
        setLiked(true);
      }
    };

    fetchImage();
  }, [id]);

  const handleLike = async () => {
    try {
      await likeImage(id); // POST request to like/unlike the image

      setImage((prev) => {
        const alreadyLiked = prev.likes.includes(currentUserId);
        const updatedLikes = alreadyLiked
          ? prev.likes.filter((uid) => uid !== currentUserId)
          : [...prev.likes, currentUserId];

        return { ...prev, likes: updatedLikes };
      });

      setLiked((prev) => !prev);
    } catch (error) {
      console.error("Error liking image:", error);
    }
  };

  if (!image) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#e0f7ff] px-4 py-10 flex justify-center">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl w-full flex flex-col">
        {/* Image on Top */}
        <div className="w-full">
          <img
            src={image.url}
            alt={image.name}
            className="w-full object-fill transition-transform duration-500 hover:scale-105 cursor-pointer"
          />
        </div>

        {/* Details Below */}
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{image.name}</h1>

          <div className="text-gray-600 text-sm">
            Uploaded on:{" "}
            <span className="font-semibold">
              {new Date(image.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Like Button */}
          <button
            onClick={handleLike}
            className="mt-4 flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors duration-300"
          >
            {liked ? (
              <AiFillHeart className="text-3xl text-red-500 transition-all duration-300" />
            ) : (
              <AiOutlineHeart className="text-3xl text-gray-500 transition-all duration-300" />
            )}
            <span className="text-lg font-medium">{image.likes.length} Likes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
