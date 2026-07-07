import React from "react";
import "../CSS/Button.css";

const Button = ({
  text = "Join Waitlist",
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={`btn-primary ${className}`.trim()}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
