import React from "react";
import { ReactComponent as Logo } from "../images/logo-red.svg";
import { ReactComponent as Globe } from "../images/globe-black.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as User } from "../images/user.svg";

export default function Nav() {
  return (
    <nav className="listings__nav">
      <div className="listings__logo">
        <Logo height="4vh" width="6vw" />
      </div>
      <div className="listings__search">
        <div className="listings__search--component">Map area</div>
        <div className="listings__search--component">Add dates</div>
        <div className="listings__search--component">Add guests</div>
      </div>
      <div className="listings__profile">
        <button className="listings__profile--hostbutton">Become a Host</button>
        <Globe height="16px" width="16px" min-width="100%" />
        <button className="listings__profile--badge">
          <Menu height="16px" width="16px" />
          <div className="listings__profile--userpic">
            <User height="16px" width="16px" />
          </div>
        </button>
      </div>
    </nav>
  );
}
