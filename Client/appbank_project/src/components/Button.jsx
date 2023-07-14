

function Button(props) {
  const { onClick, text, color, fontSize, width, height, borderRadius,border ,boxShadow,backgroundColor} = props;

  const buttonStyle = {
    boxShadow: boxShadow,
    border : border,
    color: color ,
    backgroundColor: backgroundColor,
    width: width,
    height: height,
    fontSize: fontSize,
    borderRadius: `${borderRadius}px`
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;