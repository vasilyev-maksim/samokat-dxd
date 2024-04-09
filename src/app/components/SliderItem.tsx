import * as React from "react";

export const SliderItem: React.FC<{
  title: string;
  body: React.ReactNode;
  index: number;
}> = ({ body, index, title }) => {
  return (
    <div className="slider-item-wrapper">
      <div className="slider-item">
        <div className="slider-item-index flex-centered">{index}</div>
        <img
          className="slider-item-image"
          src={`./slides/slide${index}.png`}
          alt={title}
        />
        <h3 className="slider-item-header">{title}</h3>
        {body}
      </div>
    </div>
  );
};
