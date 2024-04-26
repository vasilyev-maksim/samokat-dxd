import * as React from "react";

export function BackstageGalleryModal(props: {
  photoUrl?: string;
  onClose: () => void;
  onNav: (indexDelta: 1 | -1) => void;
  hasNext: boolean;
  hasPrev: boolean;
}) {
  // handle left and right arrows keys press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && props.hasPrev) {
        props.onNav(-1);
      } else if (e.key === "ArrowRight" && props.hasNext) {
        props.onNav(1);
      } else if (e.key === "Escape") {
        props.onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [props.onNav, props.onClose, props.hasNext, props.hasPrev]);

  return (
    !!props.photoUrl && (
      <div className="modal-bg backstage-modal-bg" onClick={props.onClose}>
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          <div className="left">
            <div
              className={
                "arrow-btn flex-centered " + (props.hasPrev ? "" : "disabled")
              }
              onClick={() => {
                if (props.hasPrev) props.onNav(-1);
              }}
            >
              <img src="/arrow-left.svg"></img>
            </div>
          </div>
          <div className="center">
            <img src={props.photoUrl} />
          </div>
          <div className="right">
            <div className="close-btn-block">
              <img src="/cross-white.svg" alt="close" onClick={props.onClose} />
            </div>
            <div>
              <div
                className={
                  "arrow-btn flex-centered " + (props.hasNext ? "" : "disabled")
                }
                onClick={() => {
                  if (props.hasNext) props.onNav(1);
                }}
              >
                <img src="/arrow-right.svg"></img>
              </div>
            </div>
            <div className="close-btn-block-placeholder" />
          </div>
        </div>
      </div>
    )
  );
}
