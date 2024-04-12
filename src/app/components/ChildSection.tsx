"use client";

import * as React from "react";
import { VideoPlayButton } from "./VideoPlayButton";
import { ChildModal } from "./ChildModal";
import { url } from "../utils";
import config from "../config.json";

export function ChildSection(props: { index: number }) {
  const { name, occupation } = config.children[props.index];
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };

  const imagePosition = props.index % 2 === 1 ? "left" : "right";

  return (
    <>
      <div
        className={`child-section ${imagePosition}-image`}
        onClick={openModal}
      >
        <div className="text">
          <img
            src={url(`./hand_written_texts/${props.index + 1}.png`)}
            alt=""
          />
          <div className="expander" />
          <div className="description">
            <div className="semi-bold">{name}</div>
            <div dangerouslySetInnerHTML={{ __html: occupation }} />
          </div>
        </div>
        <div className="photo-wrapper">
          <img
            className="photo"
            src={url(`./photos/${props.index + 1}.png`)}
            alt=""
          />
          <VideoPlayButton />
        </div>
      </div>
      {isModalOpen && <ChildModal index={props.index} onClose={closeModal} />}
    </>
  );
}
