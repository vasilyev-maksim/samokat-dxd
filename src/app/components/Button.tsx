import * as React from "react";

export const Button: React.FC<{
  label: string;
  href: string;
  marginTop?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: () => void;
  className?: string;
}> = ({ label, href, marginTop, target, onClick, className }) => {
  return (
    <div className={"link-button-wrapper " + className} style={{ marginTop }}>
      <a target={target} href={href} className="link-button" onClick={onClick}>
        {label}
      </a>
    </div>
  );
};
