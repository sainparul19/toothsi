import React from "react";
import "./Kit.css";
import { kind } from "./type.js";

function Kit() {
  return (
    <div className="kit">
      <div className="kit1">
        <div className="kit2">
          <p className="parag">WHY</p>
          <div className="kit3">
            <p>an at-home impression kit?</p>
          </div>
          <div className="kit4">
            <p>
              We are currently present in 17 cities. If your city is not one of
              them, don’t worry, we got your back! You still can get a smile
              makeover with toothsi with our at-home impression kit!
            </p>
          </div>
        </div>
        <div className="kit5">
          {kind.map(({ href, no, p1, p2 }) => (
            <div className="kit6">
              <div className="kit7">
                <picture>
                  <img src={href} alt="" />
                </picture>
                <div className="kit8">01</div>
              </div>
              <p className="parag1">{p1}</p>
              <p className="parag2">{p2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kit;
