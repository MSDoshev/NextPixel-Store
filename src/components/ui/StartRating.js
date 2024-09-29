import { useState } from "react";

export default function StarRating({ rating, onRate, readOnly = false }) {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer ${
            star <= (hoveredRating || rating)
              ? "text-yellow-500"
              : "text-gray-400"
          } ${readOnly ? "cursor-default" : "cursor-pointer"}`}
          onMouseEnter={() => !readOnly && setHoveredRating(star)}
          onMouseLeave={() => !readOnly && setHoveredRating(0)}
          onClick={() => !readOnly && onRate && onRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
