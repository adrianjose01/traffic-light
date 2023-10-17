import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Light from "./components/Light";

type LightTypes = "red" | "green" | "yellow";

const App = () => {
  const [counter, setCounter] = useState<number>(10);
  const [light, setLight] = useState<LightTypes>("red");

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCount) => prevCount - 1);
    }, 1000);
  }, []);

  const changeLighthandler = (light: LightTypes, count: number) => {
    setLight(light);
    setCounter(count);
  };

  useEffect(() => {
    if (counter >= 0) return;

    switch (light) {
      case "red":
        changeLighthandler("green", 5);
        break;
      case "green":
        changeLighthandler("yellow", 2);
        break;
      case "yellow":
        changeLighthandler("red", 10);
        break;
    }
  }, [counter, light]);

  return (
    <div className="app">
      <h1>Traffic Light</h1>
      <Counter count={counter} />
      <Light light={light} />
    </div>
  );
};

export default App;
