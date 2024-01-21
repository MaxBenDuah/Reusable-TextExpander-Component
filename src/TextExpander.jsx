import React, { useState } from "react";

const TextExpander = function ({
  children,
  defaultNumText = 15,
  color = "#1e40af",
  size = 24,
  className = "",
  showTextBtn = "Show more",
  closeTextBtn = "Show less",
  fontFamily = "sans-serif",
  defaultOpen = false,
  background = "#bfdbfe",
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const text = isOpen
    ? children
    : children.split(" ").slice(0, defaultNumText).join(" ");

  const handleClick = () => {
    setIsOpen((curr) => !curr);
  };

  const buttonStyle = {
    border: "none",
    color,
    background,
    fontSize: `${size}px`,
    padding: "5px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "4px",
  };

  const containerStyle = {
    borderRadius: "5px",
    marginBottom: "16px",
    border: `1px solid ${color}`,
    padding: "10px",
    lineHeight: "1.6",
    letterSpacing: "1px",
    fontFamily,
  };

  return (
    <div style={containerStyle} className={className}>
      {text}
      <button style={buttonStyle} onClick={handleClick}>
        {isOpen ? closeTextBtn : showTextBtn}
      </button>
    </div>
  );
};

export default TextExpander;
