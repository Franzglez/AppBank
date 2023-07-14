

function Button(props) {
  const { onClick, text, color, fontSize, width, height, border, borderRadius, backgroundColor } = props;

  const buttonStyle = {
    backgroundColor: backgroundColor,
    width: width,
    height: height,
    fontSize: fontSize,
    borderRadius: `${borderRadius}px`,
    color: color,
    border: border,
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;