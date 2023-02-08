import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
const Stars = ({ stars, reviews }) => {
  return (
    <div className="star-div">
      <span>
        {stars >= 1 ? (
          <StarIcon />
        ) : stars >= 0.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
        {stars >= 2 ? (
          <StarIcon />
        ) : stars >= 1.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
        {stars >= 3 ? (
          <StarIcon />
        ) : stars >= 2.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
        {stars >= 4 ? (
          <StarIcon />
        ) : stars >= 3.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
        {stars >= 5 ? (
          <StarIcon />
        ) : stars >= 4.5 ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
      <p>{`(${reviews} costumer reviews)`}</p>
    </div>
  );
};

export default Stars;
