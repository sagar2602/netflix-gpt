import React from 'react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null; // Don't render if no movie is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 overflow-hidden">
      <div className="bg-black w-[600px] p-5 rounded-lg shadow-lg relative h-full overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Movie Details */}
        <h2 className="text-white text-2xl mt-3">{movie.title}</h2>
        <p className="text-gray-400 text-sm mt-2">{movie.desc}</p>

        {/* Buttons */}
        <div className="flex gap-3 my-4">
          <button className="bg-white px-4 py-2 rounded-full text-black font-bold">Play</button>
          <button className="bg-gray-800 px-4 py-2 rounded-full text-white">+ My List</button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
