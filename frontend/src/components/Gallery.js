import React, { useState } from "react";
import Axios from "axios";

const Gallery = (files) => {
  const [images, setImages] = useState(() => {
    const defaultImages = [
      "https://res.cloudinary.com/dhkwyh24o/image/upload/v1725524868/dxpgwe1tranniiyriy26.jpg",
      "https://res.cloudinary.com/dhkwyh24o/image/upload/v1725524868/dxpgwe1tranniiyriy26.jpg",
      "https://res.cloudinary.com/dhkwyh24o/image/upload/v1725524868/dxpgwe1tranniiyriy26.jpg",
    ];
    const savedImages = localStorage.getItem("uploadedImages");
    return savedImages
      ? [...defaultImages, ...JSON.parse(savedImages)]
      : defaultImages;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const uploadingImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "prmulxb6");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dhkwyh24o/image/upload",
      formData
    ).then((res) => {
      const newImages = [...images, res.data.secure_url];
      setImages(newImages);
      localStorage.setItem("uploadedImages", JSON.stringify(newImages));
    });
  };

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  return (
    <div className="my-10 bg-slate-700">
      <nav className="flex flex-row justify-around py-5">
        <div>
          <h1 className="bg-black font-bold py-2 px-4 rounded">Gallery</h1>
        </div>
        <div className="w-1/2">
          <ul className="flex flex-row justify-evenly">
            <li className="bg-slate-600 py-2 px-4 rounded-full font-bold shadow-inner shadow-slate-400">
              <label htmlFor="file-upload">
                +Add image
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    uploadingImage(e.target.files);
                  }}
                />
              </label>
            </li>
            <li className="bg-slate-600 p-2 rounded-full font-bold shadow-inner shadow-slate-400">
              <button onClick={moveLeft}>&larr;</button>
            </li>
            <li className="bg-slate-600 p-2 rounded-full font-bold shadow-inner shadow-slate-400">
              <button onClick={moveRight}>&rarr;</button>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="p-10 overflow-hidden relative"
        style={{ width: "100%", height: "50%" }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uploaded ${index}`}
              className="rounded shadow-lg mx-2"
              style={{ minWidth: "300px", height: "200px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
