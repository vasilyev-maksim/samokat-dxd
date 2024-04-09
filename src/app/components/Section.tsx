import * as React from "react";

export const Section: React.FC<
  React.PropsWithChildren<{ top?: number; id?: string }>
> = ({ children, top, id }) => {
  return (
    <div
      id={id}
      className={"section section-" + id}
      style={
        {
          // top: `calc(2060vw * ${top / 100})`,
        }
      }
    >
      {children}
    </div>
  );
};
