"use client";

import * as React from "react";
import config from "../config.json";
// import { VideoPlayButton } from "./VideoPlayButton";
import { ProductsSlider } from "./ProductsSlider";
import { Button } from "./Button";

function decapitalize(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export const ChildModal: React.FC<{
  onClose: () => void;
  index: number;
}> = ({ onClose, index }) => {
  const child = config.children[index - 1];
  const set = config.sets[index - 1];
  // const video = React.useRef<HTMLVideoElement>(null);
  // const [playedOnce, setPlayedOnce] = React.useState(false);
  // const toggleVideo = () => {
  //   if (video.current?.paused) {
  //     video.current.play();
  //     setPlayedOnce(true);
  //   }
  // };

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal child" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close-btn">
          <img src="./cross.png" alt="close" onClick={onClose} />
        </div>
        <img src={`./hand_written_texts/${index}w.png`} alt="" />
        <div className="p2">
          <div className="semi-bold">{child.name}</div>
          {child.occupation}
          <br />
          <div className="semi-bold">Профессиональный стаж: </div>
          {child.age} лет
        </div>
        <div className="modal-video-wrapper">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src={`https://player.vimeo.com/video/${child.vimeoVideoId}?h=66f4c80b79&title=0&byline=0&portrait=0`}
              style={{
                position: "absolute",
                borderRadius: 10,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/*           
          <video
            ref={video}
            className="modal-video"
            width="640"
            height="360"
            src={child.video}
            // poster={`videos/${index}.png`}
            controls={playedOnce}
          >
            Ваш браузер не поддерживает тег video.
          </video>
          {!playedOnce && (
            <VideoPlayButton
              onClick={toggleVideo}
              className="modal-video-play-button"
            />
          )} */}
        </div>
        <div className="modal-text">{child.description}</div>
      </div>

      <div className="modal set" onClick={(e) => e.stopPropagation()}>
        <h2>Набор для {decapitalize(set.name)}</h2>
        <p>{set.description}</p>

        <ProductsSlider setIndex={index - 1} />

        <Button label={set.button} href="" />
      </div>
    </div>
  );
};
