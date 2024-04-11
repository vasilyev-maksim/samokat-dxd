"use client";

import * as React from "react";
import { VideoPlayButton } from "./VideoPlayButton";
import { ChildModal } from "./ChildModal";
import { url } from "../utils";

export function ChildSection(props: {
  name: string;
  occupation: React.ReactNode;
  index: number;
}) {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };

  const imagePosition = props.index % 2 === 0 ? "left" : "right";

  return (
    <>
      <div
        className={`child-section ${imagePosition}-image`}
        onClick={openModal}
      >
        <div className="text">
          <img src={url(`./hand_written_texts/${props.index}.png`)}  alt="" />
          <div className="expander" />
          <div className="description">
            <div className="semi-bold">{props.name}</div>
            {props.occupation}
          </div>
        </div>
        <div className="photo-wrapper">
          <img className="photo" src={url(`./photos/${props.index}.png`)} alt="" />
          <VideoPlayButton />
        </div>
      </div>
      {isModalOpen && <ChildModal index={props.index} onClose={closeModal} />}
    </>
  );
}
