import React from "react";
import "./About.css";
import { work, abt, stf, places } from "./working.js";

function About() {
  return (
    <div className="abt">
      <div className="abt1">
        <div className="abt2">
          <div className="abt3">
            <img
              src="https://assets.toothsi.in/assets/common/toothsi-red.svg"
              alt=""
            />
          </div>
          <div className="abt4">
            <div className="abt5">
              <div>
                <p className="heading">everything aligners</p>
                {work.map(({ works }) => (
                  <div className="abt6">
                    <a href="/">{works}</a>
                  </div>
                ))}
              </div>
              <div>
                <p className="heading">about the brand</p>
                {abt.map(({ info }) => (
                  <div className="abt6">
                    <a href="/">{info}</a>
                  </div>
                ))}
              </div>
              <div>
                <p className="heading">the cool stuff</p>
                {stf.map(({ socio }) => (
                  <div className="abt6">
                    <a href="/">{socio}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="abt7">
          aligners with scan-at-home service currently available at:
        </div>

        <div className="abt8">
          {places.map(({ names }) => (
            <a className="city">{names}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
