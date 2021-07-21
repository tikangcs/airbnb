import React from "react";

export default function Footer({ title, links }) {
  return (
    <div>
      <ul className="landing__footer--column">
        <li className="landing__footer--category">{title}</li>
        {links.map((link) => (
          <li className="landing__footer--items">{link}</li>
        ))}
      </ul>
    </div>
  );
}
