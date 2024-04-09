"use client";

import * as React from "react";
import { ChildInfo, ChildModal } from "./ChildModal";
import { Chevron } from "./SVGs";

export const Honeycake: React.FC<{
  child: ChildInfo;
  labelDirection: "left" | "right";
}> = ({ child, labelDirection }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalOpen(false);
  };

  return (
    <>
      <div className={`honeycake honeycake-${child.id}`}>
        <div
          onClick={openModal}
          className={`honeycake-label honeycake-label-${child.id} ${labelDirection}`}
        >
          <div>
            {child.name},
            <br />
            {child.age}
          </div>
          <div className="honeycake-label-chevron">
            <Chevron />
          </div>
        </div>
        <img
          src={`/honeycakes/${child.id}.png`}
          onClick={openModal}
          alt="honeycake"
          className={`honeycake-image honeycake-${child.id}`}
        />
      </div>
      {isModalOpen && <ChildModal child={child} onClose={closeModal} />}
    </>
  );
};
