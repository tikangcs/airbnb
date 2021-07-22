import React from "react";
import { ReactComponent as Heart } from "../images/heart.svg";

export default function ResultCard({ img }) {
  return (
    <div className="listings__resultcard--wrapper">
      <img
        src={img}
        alt="cover"
        width="300px"
        height="200px"
        className="listings__resultcard--image"
      />
      <div className="listings__resultcard--details">
        <div className="listings__resultcard--header">
          Entire rental unit in Queens
        </div>
        <Heart className="listings__resultcard--favorite" />
        <div className="listings__resultcard--title">
          Charming Astoria studio on quiet tree-lined street
        </div>
        <div>---</div>
        <div className="listings__resultcard--amenities">
          2 guests - Studio - 1 bed - 1 bath
        </div>
        <div className="listings__resultcard--amenities">
          Wifi - Air conditioning - Kitchen - Heating
        </div>
        <div className="listings__resultcard--price">
          <b>$50</b> / night
        </div>
      </div>
    </div>
  );
}
