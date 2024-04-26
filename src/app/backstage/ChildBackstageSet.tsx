import * as React from "react";
import config from "../config.json";
import { range, url } from "../utils";

export function ChildBackstageSet(props: {
  index: number;
  onClick: (childIndex: number, photoIndex: number) => void;
}) {
  const child = config.children[props.index];
  const photos = range(child.backstagePhotosCount, false);

  return (
    photos.length > 0 && (
      <div className="child-backstage-set">
        <h2>{child.name}</h2>

        <div className="grid">
          {photos.map((photoIndex) => (
            <img
              style={{ animationDelay: `${photoIndex * 0.05}s` }}
              onClick={() => props.onClick(props.index, photoIndex)}
              alt={child.name + " backstage photo " + photoIndex}
              src={url(`/backstage/${props.index + 1}/${photoIndex}p.JPG`)}
              key={photoIndex}
            />
          ))}
        </div>
      </div>
    )
  );
}
