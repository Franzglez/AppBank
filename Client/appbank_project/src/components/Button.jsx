

function Button(props) {
  const { onClick, text, color, fontSize, width, height, borderRadius } = props;

  const buttonStyle = {
    backgroundColor: color,
    width: width,
    height: height,
    fontSize: fontSize,
    borderRadius: `${borderRadius}px`,
    color: "white",
    border: "none",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;