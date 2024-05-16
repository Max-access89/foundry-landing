import React from "react";

interface ListItemProps {
  imageUrl?: string;
  title: string;
  description: string;
  Icon?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  imageUrl,
  title,
  description,
  Icon,
}) => {
  return (
    <div
      style={{
        textAlign: "left",
        backgroundColor: Icon ? "var(--bg-secondary)" : "none",
        borderRadius: Icon ? "1rem" : "none",
        padding: Icon ? "1rem" : "none",
        flex: 1,
      }}
    >
      {Icon && Icon}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "50%", borderRadius: "1rem" }}
        />
      )}

      <h5 className="mt-2">{title}</h5>
      <p className="description-text">{description}</p>
    </div>
  );
};

export default ListItem;
