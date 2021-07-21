import React from "react";
import GalleryItem from "./Gallery-Item";
import { Outdoor, Unique, Entire, Pet } from "../images";

export default function Gallery({ items }) {
  console.log(items);
  return (
    <div className="landing__gallery--container">
      {items.map((item) => (
        <GalleryItem img={item.img} text={item.text} subtext={item.subtext} />
      ))}
    </div>
  );
}
