import React from "react";
import Button from "../Button/Button";

interface CardProps {
  children: React.ReactNode;
  buttonLabel?: any;
  onButtonClick?: () => void;
  layout?: "sideways" | "topdown"; // Optional layout control
  backgroundImage?: string; // Optional background image URL
}

const Card: React.FC<CardProps> = ({
  children,
  buttonLabel,
  onButtonClick,
  layout = "topdown", // Default layout
  backgroundImage,
}) => {
  const isSideways = layout === "sideways";

  const cardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isSideways ? "row" : "column", // Change direction based on layout prop
    alignItems: "center", // Align items in the center for a neat look
    justifyContent: "space-between", // Space items out between
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "20px",
    backgroundColor: "var(--bg-primary)",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "", // Apply background image if provided
    overflow: "hidden",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <div style={{ flexGrow: 1 }}>{children}</div>
      {buttonLabel && (
        // <button style={buttonStyle} onClick={onButtonClick}>
        //   {buttonLabel}
        // </button>
        <Button
          variant="secondary"
          title={buttonLabel}
          onClick={() => onButtonClick}
        />
      )}
    </div>
  );
};

export default Card;
