import React from "react";
import { ReactComponent as Star } from "../images/star.svg";
import { Recent1, Recent2 } from "../images/";

export default function RecentCard() {
  return (
    <div className="listings__recentcards--container">
      <img
        className="listings__recentcards--image"
        src={Recent1}
        alt="recent"
      />
      <div className="listings__recentcards--rating">
        <Star height="20px" width="20px" />
        <p>4.84</p>
      </div>
      <div>Entire cabin - Newfoundland</div>
      <div>NEW! Cute & Cozy Cabin with Deck</div>
      <div>
        <b>$175</b> / night
      </div>
    </div>
  );
}
