import React from "react";

function HeaderSection() {
  return (
    <div className="section1-wrapper">
      <div className="titles-wrapper">
        <h1>
          Find your next best <u>friend</u>
        </h1>
        <h2>
          Create & join events
          <br />
          Chat to people
        </h2>
        <h3>Easy · Safe · Free</h3>
        <div className="appstores-wrapper">
          <img
            className="appstore-iconAndroid"
            src={require("../images/PinClipart.com_fat-man-clipart_420669.png")}
            alt="plans-capture"
          />
          <img
            className="appstore-iconApple"
            src={require("../images/1200px-Apple_logo_white.svg.png")}
            alt="plans-capture"
          />
        </div>
      </div>
      <div className="image-wrapper">
        <img src={require("../images/valeGif.gif")} alt="plans-capture" />
      </div>
    </div>
  );
}

export default HeaderSection;
