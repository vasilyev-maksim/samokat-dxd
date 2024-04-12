"use client";

import * as React from "react";
import { Br } from "./Br";

export const CookiesToast: React.FC = () => {
  const [open, setOpen] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    if (localStorage.getItem("cookies") !== "1") {
      setOpen(true);
    }
  }, []);

  React.useEffect(() => {
    if (open === false) {
      localStorage.setItem("cookies", "1");
    }
  }, [open]);

  return open ? (
    <div className="cookies-toast">
      <p>
        На этом сайте мы используем cookie, <Br for="mobile" />
        чтобы всё работало как надо,&nbsp;
        <br />
        а&nbsp;аналитика сайта соответствовала <Br for="mobile" />
        <a href="https://samokat.ru/privacy" target="_blank">
          Политике конфиденциальности
        </a>
        .
      </p>
      <button
        onClick={() => {
          setOpen(false);
        }}
      >
        OK
      </button>
    </div>
  ) : null;
};
