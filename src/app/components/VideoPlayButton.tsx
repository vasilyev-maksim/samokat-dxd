import * as React from "react";
import { url } from "../utils";

export function VideoPlayButton(props: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className={"video-play-button " + props.className}
    >
      <img src={url("./play.svg")} alt="play" className="play" />
    </button>
  );
}
