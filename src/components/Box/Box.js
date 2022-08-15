import React from "react";
import "./Box.css";

function Box() {
  return (
    <div className="box">
      <div className="box1">
        <div className="box2">
          <p>what’s in my box?</p>
        </div>
        <div className="box3">
          <div className="box4">
            <picture>
              <img
                src="https://assets.toothsi.in/Mask_Group_9_4298d30c61.png"
                alt=""
              />
            </picture>
          </div>
          <div className="box5">
            <p>Your home impression kit comes with:</p>
            <ul>
              <li>
                <p>Two sets of impression trays</p>
              </li>
              <li>
                <p>Two sets of white and coloured impression putty</p>
              </li>
              <li>
                <p>Easy-to-follow instructions manual</p>
              </li>
              <li>
                <p>Cheek Retractor</p>
              </li>
              <li>
                <p>Pre-paid return shipping label</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
