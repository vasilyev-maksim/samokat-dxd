import * as React from "react";

export function Slider(props: {
  items: {
    name: string;
    img: string;
  }[];
}) {
  return (
    <div className="sets-slider">
      {props.items.map(({ name, img }, index) => (
        <div className="sets-item" key={index}>
          <img src={img} />
          <br />
          {name}
        </div>
      ))}
    </div>
  );
}
