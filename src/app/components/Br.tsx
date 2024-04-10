import * as React from "react";

export function Br(props: { for: "mobile" | "desktop" }) {
  return <br className={props.for} />;
}
