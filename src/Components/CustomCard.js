import React from "react";
import "./customCard.scss";

function CustomCard({ movie }) {
  // console.log(movie); 

    return (
      <div className="category">
        <p className="category_title">music</p>
      <div className="movie">
          <img src='' alt="movie" />
          <p className="title">title</p>
        </div>
      </div>
    )
  }
  
export default CustomCard;
