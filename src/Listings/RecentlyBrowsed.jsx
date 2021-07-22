import React from "react";
import RecentCard from "./RecentCard.jsx";
import LocationButtons from "./LocationButtons.jsx";

export default function RecentlyBrowsed() {
  return (
    <div>
      <div className="listings__recent--sectionhead">Recently browsed</div>
      <div className="listings__recent--sectionsubhead">
        Dates and prices have been updated to match your current search
      </div>
      <div className="listings__recentcards--wrapper">
        <RecentCard />
        <RecentCard />
      </div>
      <div className="listings__locations--wrapper">
        <div className="listings__recent--sectionhead">
          People also search for
        </div>
        <div className="listings__locationbtn--wrapper">
          <LocationButtons loc="Jersey City" />
          <LocationButtons loc="Philadelphia" />
          <LocationButtons loc="Boston" />
        </div>
      </div>
    </div>
  );
}
