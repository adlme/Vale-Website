import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="credit">
        <p className="text1">© Vale! 2019</p>
        <div className="barcelona-wrapper">
          <p className="text">Thought, developed and maintained in Barcelona</p>
          {/* <img
            className="barcelona-icon"
            src={require("../images/sagrada-familia.png")}
            alt="barcelona-icon"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
