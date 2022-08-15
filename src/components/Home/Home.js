import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home1">
        <div className="home2">
          <img
            className="img1"
            src="data:image/png;base64,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"
            alt=""
          />
          <div className="para">teeth straightening at home</div>
          <p className="para1">
            Teeth correction just got easier and more convenient. Take the first
            step towards teeth straightening without leaving your couch. It’s
            everything you need. All in one box
          </p>
          {/* <button className="btn1">
              <span className="span1">book an impression kit</span>
              <span className="span2"></span>
            </button> */}
        </div>

        <div className="home3">
          <div className="home4">
            <img
              src="https://assets.toothsi.in/Image_banner_1_e2d9c6a7ab.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
