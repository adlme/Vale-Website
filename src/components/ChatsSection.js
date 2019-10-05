import React from "react";

function ChatSection() {
  return (
    <div className="plans-section-wrapper">
      <div className="flex-row">
        <div className="image-wrapper">
          <img src={require("../images/chatVale.png")} alt="map-location" />
        </div>
        <div className="details-section">
          <h2 className="section-title">Chat</h2>
          <h4>Send chat request to anyone</h4>
          <h5>Automatic chat room creation</h5>
          <h5>Easily report rude behaviour</h5>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;
