import * as React from "react";
import { HeartOutlined } from "./SVGs";

export const HelpButton: React.FC = () => {
  return (
    <a href="#how-to-help" className="help-button">
      <HeartOutlined />
      <span>Помочь</span>
    </a>
  );
};
