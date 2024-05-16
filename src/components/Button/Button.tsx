import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "circle";
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  variant = "primary",
  isLoading,
  disabled,
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
      case "circle":
        return "button-circle";
      default:
        return "button-primary";
    }
  };

  const buttonClass = getButtonClass(variant);
  const isDisabled = disabled || isLoading; // Button is disabled if explicitly disabled or loading

  return (
    <button
      className={`${buttonClass} d-flex align-items-center justify-content-center`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? (
        <span className="d-flex align-items-center justify-content-center gap-2">
          <i className="pi pi-spin pi-spinner" style={{ fontSize: "1rem" }}></i>
          {title}
        </span>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
