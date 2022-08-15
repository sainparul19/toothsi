import React from "react";
import "./Guide.css";
import { choice } from "./option.js";

function Guide() {
  return (
    <div className="gyd">
      <div className="gyd1">
        <div className="gyd2">
          <h2 className="line">faqs</h2>
          <div className="gyd3">
            <div className="gyd4">
              {choice.map(({ text }) => (
                <div className="gyd5">
                  <span>{text}</span>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
