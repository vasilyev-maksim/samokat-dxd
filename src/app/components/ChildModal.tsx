"use client";

import * as React from "react";
import { Cross, Heart, Play } from "./SVGs";

export type ChildInfo = {
  id: string;
  text: React.ReactNode;
  name: string;
  age: string;
};

export const ChildModal: React.FC<
  React.PropsWithChildren<{
    onClose: () => void;
    child: ChildInfo;
  }>
> = ({ onClose, child }) => {
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
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close-btn">
          <Cross onClick={onClose} />
        </div>
        <div className="modal-video-wrapper">
          <video
            ref={video}
            className="modal-video"
            width="640"
            height="360"
            src={`videos/${child.id}.mov`}
            poster={`videos/${child.id}.png`}
            controls={playedOnce}
          >
            Ваш браузер не поддерживает тег video.
          </video>
          {!playedOnce && (
            <button className="modal-video-play-button" onClick={toggleVideo}>
              <Play />
            </button>
          )}
        </div>
        <div className="modal-text">
          <p>{child.text}</p>

          <p className="modal-text-name">
            {child.name}, {child.age}
          </p>
        </div>
        <div className="modal-heart">
          <Heart />
        </div>
      </div>
    </div>
  );
};
