import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImages }  from '../Action/imageAction'
import ImageCard from './ImageCard';

const Images = () => {
  const dispatch = useDispatch(); // ✅ Get dispatch function
  const images = useSelector((store) => store.image)
  useEffect(() => {
    if(images === null){
      dispatch(getImages()); 
    }
  }, [images])

  
  // return (
  //   <>
  //     <div className="flex p-2 m-auto flex-wrap w-[80%] bg-amber-950 mt-10 mb-10 flex-row">
  //     {images &&
  //       images.map((image) => (
  //         <div className="">
  //           <ImageCard  image={image} key={image._id}/> 
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // )

  return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
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

}

export default Images