"use client";

import * as React from "react";

export const CookiesToast: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  return open ? (
    <div className="cookies-toast">
      <p>
        На этом сайте мы используем cookie, чтобы всё работало как надо,
        а&nbsp;аналитика сайта соответствовала{" "}
        <a href="https://samokat.ru/privacy" target="_blank">
          Политике конфиденциальности
        </a>
        .
      </p>
      <button onClick={() => setOpen(false)}>OK</button>
    </div>
  ) : null;
};
