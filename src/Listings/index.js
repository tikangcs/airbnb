import React from "react";
import Nav from "./Nav.jsx";
import Results from "./Results.jsx";
import Map from "./Map.jsx";
import Footer from "../Landing/Footer.jsx";
import BottomNav from "../Landing/BottomNav";
import footers from "../Landing/footers.js";

export default function Listings() {
  return (
    <div className="listings__wrapper">
      <Nav />
      <div className="listings__main">
        <Results />
        <Map />
      </div>

      <footer className="listings__footer--wrapper">
        <Footer title="ABOUT" links={footers.about} />
        <Footer title="COMMUNITY" links={footers.community} />
        <Footer title="HOST" links={footers.host} />
        <Footer title="SUPPORT" links={footers.support} />
      </footer>
      <div className="listings__bottomnav--wrapper">
        <BottomNav />
      </div>
    </div>
  );
}
