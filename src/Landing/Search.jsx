import React, { useState } from "react";
import { ReactComponent as Loupe } from "../images/loupe.svg";
import { Link } from "react-router-dom";
import Calendars from "../Utilities/Calendars.jsx";
import PopperComponent from "../Utilities/Popper.jsx";

export default function Search() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "popper" : undefined;

  const togglePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <div className="landing__search">
      <div className="landing__search--location" id="mobile">
        <div className="landing__search--header" id="mobile">
          Location
        </div>
        <input
          className="landing__search--input"
          id="mobile"
          type="text"
          placeholder="Where are you going?"
          onClick={togglePopper}
        ></input>
        <PopperComponent
          id={"location"}
          open={open}
          anchorEl={anchorEl}
          children={<h1>Location Suggestions</h1>}
        />
      </div>
      <div className="landing__search--checkin">
        <div className="landing__search--header">Check in</div>
        <input
          className="landing__search--input"
          type="text"
          placeholder="Add dates"
          onClick={togglePopper}
        ></input>
        <PopperComponent
          id={"calendar"}
          open={open}
          anchorEl={anchorEl}
          children={<Calendars />}
        />
      </div>
      <div className="landing__search--checkout">
        <div className="landing__search--header">Check out</div>
        <input
          className="landing__search--input"
          type="text"
          placeholder="Add dates"
          onClick={() => console.log("clicked")}
        ></input>
      </div>
      <div className="landing__search--guests">
        <div className="landing__search--header">Guests</div>
        <input
          className="landing__search--input"
          type="text"
          placeholder="Add guests"
          onClick={togglePopper}
        ></input>
        <PopperComponent
          id={"guests"}
          open={open}
          anchorEl={anchorEl}
          children={<h1>Guests</h1>}
        />
      </div>
      <div className="landing__search--tail">
        <div className="landing__search--loupe">
          <Link to="/listings">
            <Loupe height="20px" width="20px" />
          </Link>
        </div>
      </div>
    </div>
  );
}
