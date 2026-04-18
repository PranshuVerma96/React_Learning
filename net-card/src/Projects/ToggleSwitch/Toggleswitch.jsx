import "./toggleSwitch.css";
import React, { useState } from "react";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`toggle-switch ${isOn ? "on" : ""}`}
      onClick={handleToggleSwitch}
    >
      <div className="switch">{isOn ? "On" : "Off"}</div>
    </div>
  );
};
