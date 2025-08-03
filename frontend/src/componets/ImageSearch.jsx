import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages, searchImages } from "../Action/imageAction";

const ImageSearch = () => {
  const dispatch = useDispatch();
  const images = useSelector((store) => store.image);
  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState(false);

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   console.log("submited", keyword)
  //   const trimmed = keyword.trim();
  //   if (!trimmed) return;

  //   try {
  //     await dispatch(searchImages(trimmed));
  //     setSearched(true);
  //   } catch (error) {
  //     console.error("Search failed:", error.message);
  //   }

    
  // if (keyword) {
  //   console.log("Keyword is empty"); // ✅ Add this too
  //   await dispatch(getImages());
  //   return;
  // }

  // };

  const handleSearch = async (e) => {
  e.preventDefault();
  const trimmed = keyword.trim();
  console.log("submitted:", trimmed);

  if (!trimmed) {
    console.log("Keyword is empty → loading all images");
    await dispatch(getImages());
    setSearched(false); // Optional: reset 'searched' state
    return;
  }

  try {
    await dispatch(searchImages(trimmed));
    setSearched(true);
  } catch (error) {
    console.error("Search failed:", error.message);
  }
};
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-6 mb-8">
      <form
        onSubmit={handleSearch}
        className="flex w-full max-w-4xl mx-auto shadow-md rounded-4xl"
      >
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search images..."
          className="flex-1 p-3 text-lg border border-gray-300 rounded-tl-4xl rounded-bl-4xl focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 text-lg rounded-br-4xl rounded-tr-4xl font-medium hover:bg-blue-700 transition-all duration-200"
        >
          Search
        </button>
      </form>

      {searched && images?.length === 0 && (
        <div className="text-center text-gray-500 mt-6 text-lg">
          No images found for "<span className="font-semibold">{keyword}</span>"
        </div>
      )}
    </div>
  );
};

export default ImageSearch;
