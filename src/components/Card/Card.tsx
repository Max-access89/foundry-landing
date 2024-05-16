import React from "react";
import Button from "../Button/Button";

interface CardProps {
  children: React.ReactNode;
  buttonLabel?: any;
  onButtonClick?: () => void;
  layout?: "sideways" | "topdown";
  backgroundImage?: string;
  backgroundPosition?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  buttonLabel,
  onButtonClick = () => {},
  layout = "topdown",
  backgroundImage,
  backgroundPosition,
}) => {
  const isSideways = layout === "sideways";

  const cardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isSideways ? "row" : "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    padding: "1rem",
    // border: "0.1px solid #ccc",
    borderRadius: "1.5rem",
    backgroundColor: "var(--bg-primary)",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundPosition: backgroundPosition || "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    overflow: "hidden",
  };

  return (
    <div style={cardStyle}>
      <div>{children}</div>
      {buttonLabel && onButtonClick && (
        <Button
          variant={isSideways ? "circle" : "secondary"}
          title={buttonLabel}
          onClick={() => onButtonClick()} // Now safely calling the function
        />
      )}
    </div>
  );
};

export default Card;
