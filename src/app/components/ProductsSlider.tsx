import * as React from "react";
import config from "../config.json";
import { Slider } from "./Slider";

export function ProductsSlider(props: { setIndex: number }) {
  const set = config.sets[props.setIndex];
  const items = set.products.map((x) => ({
    name: x.name,
    img: `./products/${x.id}.jpeg`,
  }));
  return <Slider className="products-slider" items={items} />;
}
