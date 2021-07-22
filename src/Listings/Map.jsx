import React from "react";

export default function Map() {
  return (
    <div className="listings__map--wrapper">
      <img
        className="listings__map"
        src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=800x800&key=AIzaSyCo1UreRw0bl_8knFHnyeE74yNAFFgwgkY"
        alt="map"
      />
    </div>
  );
}
