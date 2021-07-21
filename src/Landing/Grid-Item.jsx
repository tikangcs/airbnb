import React from "react";

export default function GridItem({ loc, name, time }) {
  return (
    <div className="landing__explore--item">
      <img className="landing__explore--photo" src={loc} alt={loc} />
      <div className="landing__explore--details">
        <div className="landing__explore--location">{name}</div>
        <div className="landing__explore--eta">{time} drive</div>
      </div>
    </div>
  );
}
