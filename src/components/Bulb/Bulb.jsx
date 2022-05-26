import React from "react";

const Bulb = ({ id, color }) => {
  return (
    <div key={id} className="bulb" style={{ backgroundColor: color }}></div>
  );
};

export default Bulb;
