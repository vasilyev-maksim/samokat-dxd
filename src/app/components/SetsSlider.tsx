import * as React from "react";
import config from "../config.json";
import { Slider } from "./Slider";

export function SetsSlider() {
  const items = config.sets.map((x, i) => ({
    name: x.name,
    img: `./sets/${i + 1}.png`,
  }));
  return <Slider items={items} className="sets-slider" />;
}
