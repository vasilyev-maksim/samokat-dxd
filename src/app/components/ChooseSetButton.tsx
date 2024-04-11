"use client";

import * as React from "react";
import { Button } from "./Button";
import { sendEvent } from "../utils";

export function ChooseSetButton() {
  return (
    <Button className="choose-set-button" label="Выбрать набор" onClick={() => sendEvent("choose_set")} />
  );
}
