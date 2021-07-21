import React from "react";

export default function Banner({ tag, img, main, sub, button }) {
  return (
    <div className={`landing__banner--${tag}`}>
      <img src={img} alt={img} className={`landing__banner--image--${tag}`} />
      <div className={`landing__banner--main--${tag}`}>
        <div className={`landing__banner--text--${tag}`}>{main}</div>
        {sub && <div className={`landing__banner--sub--${tag}`}>{sub}</div>}
        <button className={`landing__banner--button--${tag}`}>{button}</button>
      </div>
    </div>
  );
}
