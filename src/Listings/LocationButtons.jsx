import React from "react";
import { ReactComponent as Search } from "../images/loupe-black.svg";

export default function LocationButtons({ loc }) {
  return (
    <button className="listings__locationbtn--button">
      <Search height="24px" width="24px" />
      <div className="listings__locationbtn--location">{loc}</div>
    </button>
  );
}
