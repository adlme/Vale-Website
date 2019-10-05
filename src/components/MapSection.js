import React from "react";

function MapSection() {
  return (
    <div className="plans-section-wrapper">
      <div className="flex-row">
        <div className="details-section">
          <h2 className="section-title">Map location</h2>
          <h4>Map the events near you</h4>
          <h5>Touch a marker to display a short description</h5>
          <h5>See all the plans worldwide</h5>
        </div>
        <div className="image-wrapper">
          <img src={require("../images/mapLocation.png")} alt="map-location" />
        </div>
      </div>
    </div>
  );
}

export default MapSection;
