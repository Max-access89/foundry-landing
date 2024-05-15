import React, { ReactNode } from "react";

interface SectionProps {
  title: string; // Title for the section
  action?: ReactNode; // Optional action element, like a button or link
  children?: ReactNode; // Content inside the section
}

const Section: React.FC<SectionProps> = ({ title, action, children }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2 className="fw-bold">{title}</h2>
        {action}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
