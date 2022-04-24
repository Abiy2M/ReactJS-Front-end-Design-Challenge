import React from "react";
import "./Main.scss";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="main">
      <div className="top_div">
        <p>Adventure</p>
      </div>
      <div className="center_div">
        <div className="the">
          <span className='left'>the</span>
          <span className='right'>With Abiy Menberu</span>
        </div>
        <div className="wildlife">
          <span className="left">wild</span>
          <span className="right">life</span>
        </div>
        <div className="adventure">adventure in the forest</div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
