import React from "react";
import NavItem from "./NavItem/NavItem";
import Button from "./Button/Button";
import { FoundryLogo } from "./Icons/Icons";

export const Nav = () => {
  const handleNavClick = () => {
    // Define what happens when you click a nav item
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10rem",
        backgroundColor: "white",
      }}
    >
      <FoundryLogo />
      <div style={{ display: "flex" }}>
        <NavItem label="Home" onClick={handleNavClick} isActive={true} />
        <NavItem label="Business Automation" onClick={handleNavClick} />
        <NavItem
          label="Financial Servcies"
          onClick={handleNavClick}
          hasDropdown={true}
        />
        <NavItem
          label="Use cases"
          onClick={handleNavClick}
          hasDropdown={true}
        />
        <NavItem
          label="Logistics and Supply Chain"
          onClick={handleNavClick}
          hasDropdown={true}
        />
        <NavItem label="Pricing" onClick={handleNavClick} hasDropdown={true} />
        <NavItem
          label="Developer"
          onClick={handleNavClick}
          hasDropdown={true}
        />
      </div>
      <Button title="Login" variant="primary" onClick={() => {}} />
    </nav>
  );
};
