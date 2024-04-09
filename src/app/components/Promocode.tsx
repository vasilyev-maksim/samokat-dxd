"use client";

import * as React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

export const Promocode: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <div className="promocode">
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <div className="promocode-body">
          {code}
          {copied ? (
            <img src={"./copied.png"} alt="copied" />
          ) : (
            <img src={"./copy.png"} alt="copy" />
          )}
        </div>
      </CopyToClipboard>
    </div>
  );
};
