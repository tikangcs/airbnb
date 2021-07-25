import React from "react";
import GalleryItem from "./Gallery-Item";

export default function Gallery({ items }) {
  return (
    <div className="landing__gallery--container">
      {items.map((item) => (
        <GalleryItem
          img={item.img}
          text={item.text}
          subtext={item.subtext}
          key={item.id}
        />
      ))}
    </div>
  );
}
