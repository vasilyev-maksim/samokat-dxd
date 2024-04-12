import * as React from "react";
import config from "../config.json";

export const Button: React.FC<{
  label: string;
  marginTop?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: () => void;
  className?: string;
}> = ({ label, marginTop, target, onClick, className }) => {
  return (
    <div className={"link-button-wrapper " + className} style={{ marginTop }}>
      <a
        target={target}
        href={config.appLink}
        className="link-button"
        onClick={onClick}
      >
        {label}
      </a>
    </div>
  );
};
