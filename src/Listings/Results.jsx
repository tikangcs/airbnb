import React from "react";
import ResultCard from "./ResultCard";
import RecentlyBrowsed from "./RecentlyBrowsed.jsx";
import { Trophy, QueensCover } from "../images";

export default function Results() {
  return (
    <div className="listings__results--wrapper">
      <div className="listings__results--header">
        <div className="listings__results--subtitle">300+ stays</div>
        <h1 className="listings__results--title">Stays in selected map area</h1>
        <div className="listings__results--filters">
          <button className="listings__results--filterbutton">
            Cancellation flexibility
          </button>
          <button className="listings__results--filterbutton">
            Type of place
          </button>
          <button className="listings__results--filterbutton">Price</button>
          <button className="listings__results--filterbutton">
            Rooms and beds
          </button>
          <button className="listings__results--filterbutton">
            More Filters
          </button>
        </div>
        <div className="listings__results--stats">
          <img src={Trophy} alt="trophy" height="40px" width="40px" />
          <p className="listings__results--statstext">
            <b>More than 1,000,000 guests have stayed in New York.</b> On
            average their stays 4.7 out of 5 stars.
          </p>
        </div>
      </div>
      <div>
        <ResultCard img={QueensCover} />
      </div>
      <div className="listings__results--nav">
        <div className="listings__results--pagination">
          1 - 20 of 300+ places to stay
        </div>
        <div className="listings__results--fineprint">
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </div>
      </div>
      <div className="listings__recent--wrapper">
        <RecentlyBrowsed />
      </div>
    </div>
  );
}
