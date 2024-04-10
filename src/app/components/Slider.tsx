import * as React from "react";

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
          <img src={img} />
          <br />
          {name}
        </div>
      ))}
    </div>
  );
}
