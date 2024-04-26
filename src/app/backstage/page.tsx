"use client";

import { useMemo, useState } from "react";
import * as config from "../config.json";
import { range, url } from "../utils";
import { BackstageGalleryModal } from "./BackstageGalleryModal";
import { ChildBackstageSet } from "./ChildBackstageSet";

export default function Backstage() {
  const children = range(config.children.length);
  const [activeChildIndex, setActiveChildIndex] = useState<number>(-1);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const photoUrl = useMemo(() => {
    return activeChildIndex > -1 && activeIndex > -1
      ? url(`/backstage/${activeChildIndex + 1}/${activeIndex}.JPG`)
      : undefined;
  }, [activeChildIndex, activeIndex]);
  const setActiveIndexes = (childIndex: number, photoIndex: number) => {
    setActiveChildIndex(childIndex);
    setActiveIndex(photoIndex);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setActiveChildIndex(-1);
    setActiveIndex(-1);
    document.body.style.overflow = "auto";
  };
  const onNav = (indexDelta: 1 | -1) => {
    const newIndex = activeIndex + indexDelta;
    if (newIndex < 0 && activeChildIndex > 0) {
      setActiveChildIndex(activeChildIndex - 1);
      setActiveIndex(
        config.children[activeChildIndex - 1].backstagePhotosCount
      );
    } else if (
      newIndex > config.children[activeChildIndex].backstagePhotosCount &&
      activeChildIndex < children.length - 1
    ) {
      setActiveChildIndex(activeChildIndex + 1);
      setActiveIndex(1);
    } else {
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="backstage">
      {children.map((index) => (
        <ChildBackstageSet
          onClick={setActiveIndexes}
          key={index}
          index={index}
        />
      ))}
      <BackstageGalleryModal
        onNav={onNav}
        hasNext={
          !(
            activeChildIndex === children.length - 1 &&
            activeIndex ===
              config.children[activeChildIndex]?.backstagePhotosCount
          )
        }
        hasPrev={!(activeIndex === 1 && activeChildIndex === 0)}
        onClose={closeModal}
        photoUrl={photoUrl}
      />
    </div>
  );
}
