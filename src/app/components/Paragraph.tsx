import * as React from "react";

export const Paragraph: React.FC<
  React.PropsWithChildren<{
    marginTop?: string;
    marginBottom?: string;
    headingMarginBottom?: string;
    title?: {
      text: string;
      align?: "center" | "left";
    };
    contentAlign?: "center" | "left";
    contentStyle?: React.CSSProperties | undefined;
    className?: string;
  }>
> = ({
  marginTop,
  children,
  marginBottom,
  headingMarginBottom,
  title,
  contentAlign,
  className,
  contentStyle,
}) => {
  return (
    <div className={className}>
      {title ? (
        <h2
          className="heading"
          style={{
            marginBottom: headingMarginBottom,
            marginTop,
            textAlign: title.align,
          }}
        >
          {title.text}
        </h2>
      ) : null}
      <div
        className="paragraph"
        style={{
          marginBottom,
          marginTop: title ? undefined : marginTop,
          textAlign: contentAlign || "left",
          ...contentStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};
