import React, { FC, useMemo } from "react";

interface TitleProps {
  size: "sm" | "md" | "lg";
  color?: string;
  children?: React.ReactNode;
}

const Title: FC<TitleProps> = ({ size, color, children }) => {
  const mainSize = useMemo(() => {
    if (size === "sm") {
      return 15;
    } else if (size === "md") {
      return 25;
    } else if (size === "lg") {
      return 35;
    }
  }, [size]);

  return (
    <h1
      style={{
        fontSize: mainSize,
        color,
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </h1>
  );
};

export default Title;
