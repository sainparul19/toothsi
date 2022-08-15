import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav1">
        <div className="nav2">
          <div className="images">
            <a className="imge1" href="/">
              <img
                src="https://assets.toothsi.in/assets/common/toothsi-red.svg"
                alt=""
              />
            </a>
          </div>
          <ul className="imge2">
            <li className="list">
              <span>aligners</span>
            </li>
            <li className="list">
              <span>products</span>
            </li>
          </ul>
          <div className="tag">
            <a className="imge3" href="/">
              explore
              <img
                src="https://assets.toothsi.in/skinnsi_logo_1_Mehul_922e82dacf.webp"
                alt=""
              />
            </a>
          </div>
          <div className="tag1">
            <span>
              <img
                src="https://assets.toothsi.in/headset_mic_c5339d46a3.svg?q=75&w=48"
                alt=""
              />
            </span>
          </div>
          <div className="tag2">login</div>
          <button className="btn">book a scan</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
