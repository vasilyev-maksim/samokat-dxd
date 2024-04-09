import * as React from "react";

export const List: React.FC<{
  items: React.ReactNode[];
  type: "bulleted" | "ordered" | "dashed";
  marginBottom?: string;
}> = ({ items, type, marginBottom }) => {
  if (type === "bulleted") {
    return (
      <ul className={"list " + type} style={{ marginBottom }}>
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    );
  }

  if (type === "ordered") {
    return (
      <ol className={"list " + type} style={{ marginBottom }}>
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ol>
    );
  }

  if (type === "dashed") {
    return (
      <ul className={"list " + type} style={{ marginBottom }}>
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    );
  }
};
