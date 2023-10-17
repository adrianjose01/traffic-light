import React from "react";

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <div className="counter">
      <h2 className="counter-number">{count.toString().padStart(2, "0")}</h2>
    </div>
  );
};

export default Counter;
