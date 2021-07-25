import React from "react";

export default function Footer({ title, links }) {
  return (
    <div className="landing__footer--set">
      <ul className="landing__footer--column">
        <li className="landing__footer--category">{title}</li>
        <div className="landing__footer--links">
          {links.map((link) => (
            <li className="landing__footer--items" key={links.indexOf(link)}>
              {link}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
