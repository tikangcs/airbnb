import React from "react";
import Nav from "./Nav.jsx";
import Search from "./Search.jsx";
import Headline from "./Headline.jsx";
import Grid from "./Grid.jsx";
import Banner from "./Banner.jsx";
import Gallery from "./Gallery.jsx";
import Footer from "./Footer.jsx";
import BottomNav from "./BottomNav.jsx";
import footers from "./footers.js";
import galleries from "./galleries.js";
import { Forest, Host } from "../images/index";

export default function LandingPage() {
  return (
    <>
      <div className="landing__main--wrapper">
        <div className="landing__main--container">
          <Nav />
          <Search />
          <Headline />
        </div>
      </div>
      <div className="landing__explore--wrapper">
        <div className="landing__section--title">Explore nearby</div>
        <div>
          <Grid />
        </div>
        <Banner
          img={Forest}
          main="Not sure where to go? Perfect."
          button="I'm flexible"
          tag="forest"
        />
        <div className="landing__section--title">Live anywhere</div>
        <Gallery items={galleries.stays} />
        <div className="landing__section--title">Ways to explore</div>
        <div className="landing__section--subtitle">
          Activities to book with your upcoming stay
        </div>
        <Gallery items={galleries.experiences} />
        <Banner
          img={Host}
          main="Try hosting"
          sub="Earn extra income and unlock new opportunities by sharing your space."
          button="Learn more"
          tag="host"
        />
      </div>
      <footer className="landing__footer--wrapper">
        <Footer title="ABOUT" links={footers.about} />
        <Footer title="COMMUNITY" links={footers.community} />
        <Footer title="HOST" links={footers.host} />
        <Footer title="SUPPORT" links={footers.support} />
      </footer>
      <div>
        <BottomNav />
      </div>
    </>
  );
}
