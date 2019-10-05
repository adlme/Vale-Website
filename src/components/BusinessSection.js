import React from "react";

function BusinessSection() {
  return (
    <div className="plans-section-wrapper">
      <div className="flex-row">
        <div className="image-wrapper">
          <img src={require("../images/contacts.png")} alt="plans-capture" />
        </div>
        <div className="details-section">
          <h2 className="section-title">Corporate</h2>
          <h4>Empower your business</h4>

          <h5>Bid for the daily advertised plan</h5>
          <h5>Receive reports of potential customers</h5>
          <h5>Publish your sponsored event</h5>
        </div>
      </div>
    </div>
  );
}

export default BusinessSection;
