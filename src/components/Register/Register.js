import React from "react";
import "./Register.css";
import { inpt } from "./input.js";

function Register() {
  return (
    <div className="reg">
      <div className="reg1">
        <form className="reg2">
          <h4>
            your teeth straightening journey starts with an impression kit.
          </h4>
          <div className="reg3">
            {inpt.map(({ type, kind }) => (
              <div className="reg4">
                <label className="lbl">{type} *</label>
                <input name={kind} placeholder="" className="intit" />
              </div>
            ))}
            <button className="btn2">
              <span className="span1">book an impression kit</span>
              <span className="span2"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
