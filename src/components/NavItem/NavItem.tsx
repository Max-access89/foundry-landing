import React, { useState } from "react";
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
    <div className={`nav-item ${isActive ? "active" : ""}`} onClick={onClick}>
      {label}
      {hasDropdown && <FiChevronDown />}
    </div>
  );
};

export default NavItem;
