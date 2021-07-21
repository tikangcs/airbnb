import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Globe } from "../images/globe.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as User } from "../images/user.svg";

export default function Nav() {
  return (
    <nav className="landing__nav">
      <div className="landing__logo">
        <Logo height="5vh" width="8vw" />
      </div>
      <div className="landing__tabs">
        <div className="landing__tab">Places to stay</div>
        <div className="landing__tab">Experiences</div>
        <div className="landing__tab">Online Experiences</div>
      </div>
      <div className="landing__profile">
        <button>Become a Host</button>
        <Globe height="16px" width="16px" />
        <button className="landing__profile--badge">
          <Menu height="16px" width="16px" />
          <User height="16px" width="16px" />
        </button>
      </div>
    </nav>
  );
}
