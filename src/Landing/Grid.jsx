import React from "react";
import GridItem from "./Grid-Item.jsx";
import {
  NY,
  DC,
  Boston,
  Arlington,
  NBergen,
  Philly,
  Portland,
  VA,
} from "../images/";

export default function Grid() {
  return (
    <div className="landing__explore--grid">
      <GridItem loc={NY} name="New York" time="30 minute" />
      <GridItem loc={DC} name="Washington DC" time="5 hour" />
      <GridItem loc={Philly} name="Philadelphia" time="2.5 hour" />
      <GridItem loc={Boston} name="Boston" time="4.5 hour" />
      <GridItem loc={VA} name="Virginia" time="8 hour" />
      <GridItem loc={Arlington} name="Arlington" time="5.5 hour" />
      <GridItem loc={Portland} name="Portland" time="6.5 hour" />
      <GridItem loc={NBergen} name="North Bergen" time="30 minute" />
    </div>
  );
}
