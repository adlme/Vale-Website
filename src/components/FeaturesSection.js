import React from "react";

function FeaturesSection() {
  return (
    <div className="all-features-wrapper">
      <div className="feature-wrapper">
        {/* <img src={require("../images/icon-easy-21.jpg")} alt="feature" /> */}
        <h3>Easy</h3>
        <h4>Spend time with your friend, not your phone</h4>
      </div>

      <div className="feature-wrapper">
        {/* <img src={require("../images/shield.png")} alt="feature" /> */}
        <h3>Safe</h3>
        <h4>All users are verified with IDs</h4>
      </div>

      <div className="feature-wrapper">
        {/* <img src={require("../images/piggy-bank.png")} alt="feature" /> */}
        <h3>Free</h3>
        <h4>All user-generated plans are free</h4>
      </div>
    </div>
  );
}

export default FeaturesSection;
