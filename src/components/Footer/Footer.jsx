import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <p>wild festival</p>
        <p>05-10-september</p>
      </div>
      <div className="second">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore
          placeat
          <br />
          laudantium distinctio labore rerum!
        </p>
        <p>
          <em>#joinourherd</em>
        </p>
      </div>
      <div className="third">
        <p>243</p>
        <p>things to do in the wild</p>
      </div>
      <div className="fourth">
        <p>126</p>
        <p>wild tour packages</p>
      </div>
      <div className="fifth">
        <p>117</p>
        <p>places to stay</p>
      </div>
    </div>
  );
};

export default Footer;
