"use client";

import * as React from "react";
import config from "../config.json";
import { ProductsSlider } from "./ProductsSlider";
import { Button } from "./Button";
import { VideoPlayButton } from "./VideoPlayButton";
import { sendEvent, url } from "../utils";
import { BackstageLink } from "./BackstageLink";

function decapitalize(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export const ChildModal: React.FC<{
  onClose: () => void;
  index: number;
}> = ({ onClose, index }) => {
  const child = config.children[index];
  const set = config.sets[index];
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
          <img src={url("./cross.png")} alt="close" onClick={onClose} />
        </div>
        <div className="hand-written">
          <img src={url(`./hand_written_texts/${index + 1}w.png`)} alt="" />
        </div>
        <div className="body-wrapper">
          <div className="p2">
            <div className="semi-bold">{child.name}</div>
            <div dangerouslySetInnerHTML={{ __html: child.occupation }} />
            <br />
            <div className="semi-bold">Профессиональный стаж: </div>
            {child.age}
            <div
              className="modal-text"
              dangerouslySetInnerHTML={{ __html: child.description }}
            />
          </div>
          <div className="modal-video-wrapper">
            <video
              ref={video}
              className="modal-video"
              src={`./videos/${index + 1}.mp4`}
              poster={`photos/${index + 1}f.png`}
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
        </div>
        <div
          className="mobile-only modal-text "
          dangerouslySetInnerHTML={{ __html: child.description }}
        />

        <div className="desktop-only set ">
          <h2>Набор {decapitalize(set.name)}</h2>
          <p dangerouslySetInnerHTML={{ __html: set.description }} />

          <ProductsSlider setIndex={index} />

          <Button label={set.button} onClick={() => sendEvent(set.eventKey)} />
        </div>
      </div>

      <div
        className="mobile-only modal set "
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Набор {decapitalize(set.name)}</h2>
        <p dangerouslySetInnerHTML={{ __html: set.description }} />
        <ProductsSlider setIndex={index} />
        <Button label={set.button} onClick={() => sendEvent(set.eventKey)} />
        <br />
        <div className="backstage-link-block">
          <BackstageLink childAnchorIndex={index} />
        </div>
      </div>
    </div>
  );
};
