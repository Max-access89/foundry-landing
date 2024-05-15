import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  variant = "primary",
}) => {
  // Define button styles based on the variant
  const getButtonClass = (variant: string) => {
    switch (variant) {
      case "primary":
        return "button-primary";
      case "secondary":
        return "button-secondary";
      case "danger":
        return "button-danger";
      case "ghost":
        return "button-ghost";
      default:
        return "button-primary";
    }
  };

  const buttonClass = getButtonClass(variant);

  return (
    <button className={buttonClass} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
