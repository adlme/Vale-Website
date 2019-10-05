import React from "react";

function UsersSection() {
  return (
    <div className="plans-section-wrapper">
      <div className="flex-row">
        <div className="details-section">
          <h2 className="section-title">Users</h2>
          <h4>
            Don't fancy any plans? <br /> Just chat with someone
          </h4>
          <h5>Know more about their personality</h5>
          <h5>Send chat requests to anyone</h5>
          <h5>See the plans they have created</h5>
        </div>
        <div className="image-wrapper">
          <img src={require("../images/contacts.png")} alt="plans-capture" />
        </div>
      </div>
    </div>
  );
}

export default UsersSection;
