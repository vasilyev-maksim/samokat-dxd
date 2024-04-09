"use client";

import * as React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

export const Promocode: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
      <div className="promocode">
        <div className="promocode-body">
          <span>{code}</span>
          {copied ? (
            <img src={"./copied.png"} alt="copied" />
          ) : (
            <img src={"./copy.png"} alt="copy" />
          )}
        </div>
      </div>
    </CopyToClipboard>
  );
};
