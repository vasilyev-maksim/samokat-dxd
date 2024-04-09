import * as React from "react";

export function VideoPlayButton(props: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className={"video-play-button " + props.className}
    >
      <img src="./play.svg" alt="play" className="play" />
    </button>
  );
}
