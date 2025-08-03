import React, { useState } from "react";
import { uploadImage } from "../Action/imageAction";
import { useDispatch } from "react-redux"; // ✅ Add this

const UploadImage = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!name || !file) {
      setError("Both name and file are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file); // field name must match `.single("file")`

    try {
      setLoading(true);
      setError(null);
      setMessage(null);
      await dispatch(uploadImage(formData));
      setMessage("Image uploaded successfully.");
      setName("");
      setFile(null);
    } catch (err) {
      setError(
        "Upload failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Upload Image
      </h2>
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Image name"
          className="border p-2 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="border p-2 rounded-md"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>

        {message && <p className="text-green-600 text-sm">{message}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default UploadImage;
