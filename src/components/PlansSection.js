import React from "react";

function PlansSection() {
  return (
    <div className="plans-section-wrapper">
      <div className="flex-row">
        <div className="image-wrapper">
          <img src={require("../images/plans.png")} alt="plans-capture" />
        </div>
        <div className="details-section">
          <h2 className="section-title">Events</h2>
          <h4>Explore events created by users like you</h4>
          <h5>Create a plan in 20 secs</h5>
          <h5>Limit the number of spots</h5>
          <h5>Accept/decline join requests</h5>
          <h5>Automatic chat room creation</h5>
        </div>
      </div>
    </div>
  );
}

export default PlansSection;
