import * as React from "react";
import config from "../config.json";
import { range } from "../utils";

export function SetsSlider() {
  return (
    <div className="sets-slider">
      {range(config.sets.length).map((i) => (
        <div className="sets-item" key={i}>
          <img src={`./sets/${i + 1}.png`} />
          <br />
          {config.sets[i]}
        </div>
      ))}
    </div>
  );
}
