import React from "react";
import { ReactComponent as Loupe } from "../images/loupe.svg";
import { Link } from "react-router-dom";

export default function Search() {
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
        ></input>
      </div>
      <div className="landing__search--checkin">
        <div className="landing__search--header">Check in</div>
        <input
          className="landing__search--input"
          type="text"
          placeholder="Add Dates"
        ></input>
      </div>
      <div className="landing__search--checkout">
        <div className="landing__search--header">Check out</div>
        <input
          className="landing__search--input"
          type="text"
          placeholder="Add Dates"
        ></input>
      </div>
      <div className="landing__search--guests">
        <div className="landing__search--header">Guests</div>3
        <input
          className="landing__search--input"
          type="text"
          placeholder="Add Guests"
        ></input>
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
