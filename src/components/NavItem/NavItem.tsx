// NavItem.js
import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  hasDropdown = false,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      className={`nav-item ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer", color: isActive ? "green" : "black" }}
    >
      {label}
      {hasDropdown && <FiChevronDown />}
    </div>
  );
};

export default NavItem;
