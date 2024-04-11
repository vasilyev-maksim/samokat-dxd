import * as React from "react";
import { url } from "../utils";

export function Slider(props: {
  items: {
    name: string;
    img: string;
  }[];
  className?: string;
}) {
  return (
    <div className={"slider " + props.className}>
      {props.items.map(({ name, img }, index) => (
        <div className="slider-item" key={index}>
          <img src={url(img)} />
          <br />
          {name}
        </div>
      ))}
    </div>
  );
}
