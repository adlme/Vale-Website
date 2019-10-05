import React from "react";

function Nav() {
  return (
    <div className="nav-wrapper">
      <img src={require("../images/logo-205x80.png")} alt="plans-capture" />
      <p>Corporate</p>
      <p>Help</p>
      <p>FAQ's</p>
      <p>ENG</p>
    </div>
  );
}

export default Nav;
