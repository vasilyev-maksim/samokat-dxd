"use client";

import * as React from "react";

export const CookiesToast: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  return open ? (
    <div className="cookies-toast">
      <p>
        На этом сайте мы используем cookie, <br />
        чтобы всё работало как надо,
        <br />
        а&nbsp;аналитика сайта соответствовала <br />
        <a href="https://samokat.ru/privacy" target="_blank">
          Политике конфиденциальности
        </a>
        .
      </p>
      <button onClick={() => setOpen(false)}>OK</button>
    </div>
  ) : null;
};
