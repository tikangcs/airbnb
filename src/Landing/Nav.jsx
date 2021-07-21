import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Globe } from "../images/globe.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as User } from "../images/user.svg";

export default function Nav() {
  return (
    <nav className="landing__nav">
      <div className="landing__logo">
        <Logo height="6vh" width="9vw" />
      </div>
      <div className="landing__tabs">
        <div className="landing__tab">Places to stay</div>
        <div className="landing__tab">Experiences</div>
        <div className="landing__tab">Online Experiences</div>
      </div>
      <div className="landing__profile">
        <button className="landing__profile--hostbutton">Become a Host</button>
        <Globe height="16px" width="16px" min-width="100%" />
        <button className="landing__profile--badge">
          <Menu height="16px" width="16px" />
          <div className="landing__profile--userpic">
            <User height="16px" width="16px" />
          </div>
        </button>
      </div>
    </nav>
  );
}
