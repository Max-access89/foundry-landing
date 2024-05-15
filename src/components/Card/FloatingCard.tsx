import React from "react";

interface FloatingCardProps {
  children: React.ReactNode; // Allows any React elements to be passed as children
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default FloatingCard;
