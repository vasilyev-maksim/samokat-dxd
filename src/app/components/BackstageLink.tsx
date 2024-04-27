"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

export function BackstageLink(props: { childAnchorIndex?: number }) {
  const visible = usePathname() === "/";
  return visible ? (
    <span>
      <a
        target="_blank"
        href={
          "/backstage.html" +
          (props.childAnchorIndex !== undefined
            ? "#" + (props.childAnchorIndex + 1)
            : "")
        }
      >
        {/* <a
        target="_blank"
        href="https://cloud.mail.ru/public/uvKj/6vnCBkMom/%D0%91%D1%8D%D0%BA%D1%81%D1%82%D0%B5%D0%B9%D0%B4%D0%B6"
      > */}
        Фото с бекстейджа
      </a>{" "}
      ♡
    </span>
  ) : null;
}
