import React from 'react';

const Review = ({ name, tripDetails, rating, feedback }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">{tripDetails}</p>
      <p className="text-xl text-green-500">{rating}/5</p>
      <p className="text-gray-700">{feedback}</p>
    </div>
  );
};

export default Review;
