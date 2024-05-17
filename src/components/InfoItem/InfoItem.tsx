import React from "react";

interface InfoItemProps {
  icon: React.ReactNode; // Allows for icons or images to be passed
  title: string;
  description: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, description }) => {
  return (
    <div
      className="col-12 col-sm-5 info-item"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        color: "white",
        padding: "2rem",
      }}
    >
      <div style={{ marginRight: "20px" }}>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoItem;
