import React from "react";
import * as FaIcons from "react-icons/fa";

function Rating({ rating }) {
  return (
    <div className="flex items-center">
      {Array(1, 2, 3, 4, 5).map((_, i) => (
        <span key={i} className="text-warning">
          {rating > i ? (
            <FaIcons.FaStar size={20} />
          ) : (
            <FaIcons.FaStarHalfAlt />
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating;
