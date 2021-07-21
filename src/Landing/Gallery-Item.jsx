import React from "react";

export default function GalleryItem({ img, text, subtext }) {
  return (
    <div className="landing__gallery--item">
      <img className="landing__gallery--image" src={img} alt={text} />
      <p className="landing__gallery--subtitle">{text}</p>
      {subtext && <p className="landing__gallery--subtext">{subtext}</p>}
    </div>
  );
}
