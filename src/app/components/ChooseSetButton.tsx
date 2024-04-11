"use client";

import * as React from "react";
import { Button } from "./Button";
import { sendEvent } from "../utils";

export function ChooseSetButton() {
  return (
    <Button label="Выбрать набор" onClick={() => sendEvent("choose_set")} />
  );
}
