import React, { FC } from "react";

interface TextProps {
  mt?: number;
  mb?: number;
  children?: React.ReactNode;
}

const Text: FC<TextProps> = ({ children, mt, mb }) => {
  return (
    <p
      style={{
        marginTop: mt,
        marginBottom: mb,
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </p>
  );
};

export default Text;
