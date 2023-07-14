import React from "react";

function Card(props) {
  const { width, height, backgroundColor, borderRadius, boxShadow, display, justifyContent, border, gap } = props;

  const cardStyle = {
    border: border,
    display: display,
    justifyContent: justifyContent,
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    boxShadow: boxShadow,

    gap: gap
  };
  return <div style={cardStyle}>{props.children}</div>;
}

export default Card;
