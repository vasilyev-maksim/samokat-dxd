import * as React from "react";
import { url } from "../utils";
import config from "../config.json";

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
        <a href={config.appLink} className="slider-item" key={index}>
          <img src={url(img)} />
          <br />
          <div dangerouslySetInnerHTML={{ __html: name }} />
        </a>
      ))}
    </div>
  );
}
