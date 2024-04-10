"use client";

import * as React from "react";
import { Cross, Play } from "./SVGs";
import config from "../config.json";
import { VideoPlayButton } from "./VideoPlayButton";

export const ChildModal: React.FC<{
  onClose: () => void;
  index: number;
}> = ({ onClose, index }) => {
  const child = config.children[index - 1];
  const set = config.sets[index - 1];
  const video = React.useRef<HTMLVideoElement>(null);
  const [playedOnce, setPlayedOnce] = React.useState(false);
  const toggleVideo = () => {
    if (video.current?.paused) {
      video.current.play();
      setPlayedOnce(true);
    }
  };

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal child" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close-btn">
          <img src="./cross.png" alt="close" onClick={onClose} />
        </div>
        <img src={`./hand_written_texts/${index}w.png`} alt="" />
        <p className="p2">
          <div className="semi-bold">{child.name}</div>
          {child.occupation}
          <br />
          <div className="semi-bold">Профессиональный стаж: </div>
          {child.age} лет
        </p>
        <div className="modal-video-wrapper">
          <video
            ref={video}
            className="modal-video"
            width="640"
            height="360"
            src={`videos/${index}.mov`}
            poster={`videos/${index}.png`}
            controls={playedOnce}
          >
            Ваш браузер не поддерживает тег video.
          </video>
          {!playedOnce && (
            <VideoPlayButton
              onClick={toggleVideo}
              className="modal-video-play-button"
            />
          )}
        </div>
        <div className="modal-text">{child.description}</div>
      </div>

      <div className="modal set" onClick={(e) => e.stopPropagation()}>
        <h2>{set.name}</h2>
        <div className="modal-video-wrapper">
          <video
            ref={video}
            className="modal-video"
            width="640"
            height="360"
            src={`videos/${index}.mov`}
            poster={`videos/${index}.png`}
            controls={playedOnce}
          >
            Ваш браузер не поддерживает тег video.
          </video>
          {!playedOnce && (
            <VideoPlayButton
              onClick={toggleVideo}
              className="modal-video-play-button"
            />
          )}
        </div>
        <div className="modal-text">{child.description}</div>
      </div>
    </div>
  );
};
