import React from "react";

interface LightProps {
  light: "red" | "green" | "yellow";
}

const Light: React.FC<LightProps> = ({ light }) => {
  return (
    <div className="traffic-light">
      <div className={`red-light ${light}`} />
      <div className={`green-light ${light}`} />
      <div className={`yellow-light ${light}`} />
    </div>
  );
};

export default Light;
