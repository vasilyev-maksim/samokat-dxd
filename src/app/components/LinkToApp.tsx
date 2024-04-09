"use client";

import * as React from "react";
import { Button } from "./Button";

export const LinkToApp: React.FC = () => {
  return (
    <Button
      target="_blank"
      href="https://samokat.go.link/main?showcaseType=MINIMARKET&adj_t=10oehtvh&adj_campaign=suncity_samokat&adj_adgroup=to_app"
      label="В приложение"
      onClick={() => {
        (window as any).exponea.track("blago_samokat", {
          event_action: "blago_to_app",
        });
      }}
    />
  );
};
