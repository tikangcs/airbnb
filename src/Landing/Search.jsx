import React from "react";
import { ReactComponent as Loupe } from "../images/loupe.svg";

export default function Search() {
  return (
    <div className="landing__search">
      <input
        className="landing__search--location"
        type="text"
        placeholder="Where are you going?"
      ></input>
      <input
        className="landing__search--checkin"
        type="text"
        placeholder="Add Dates"
      ></input>
      <input
        className="landing__search--checkout"
        type="text"
        placeholder="Add Dates"
      ></input>
      <div>
        <input
          className="landing__search--guests"
          type="text"
          placeholder="Add Guests"
        ></input>
        <div>
          <Loupe height="16px" width="16px" />
        </div>
      </div>
    </div>
  );
}
