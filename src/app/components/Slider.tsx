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
    <a className={"slider " + props.className} href={config.appLink}>
      {props.items.map(({ name, img }, index) => (
        <div className="slider-item" key={index}>
          <img src={url(img)} />
          <br />
          <div dangerouslySetInnerHTML={{ __html: name }} />
        </div>
      ))}
    </a>
  );
}
