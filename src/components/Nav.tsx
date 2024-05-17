import Button from "./Button/Button";
import { FoundryLogo } from "./Icons/Icons";
import { useState } from "react";
import { Menubar } from "primereact/menubar";

export const Nav = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavClick = (label: string, url: string) => {
    setActiveItem(label); // Update the active item state
    if (url) {
      window.location.href = url; // Navigate to the given URL if provided
    }
  };

  const items = [
    {
      label: "Home",
      command: () => handleNavClick("Home", "/"),
      className: activeItem === "Home" ? "active-menu-item" : "",
    },
    {
      label: "Business Automation",
      items: [],
      className: activeItem === "Business Automation" ? "active-menu-item" : "",
    },
    {
      label: "Financial Services",
      items: [],
      className: activeItem === "Financial Services" ? "active-menu-item" : "",
    },
    {
      label: "Use cases",
      items: [],
      className: activeItem === "Use cases" ? "active-menu-item" : "",
    },
    {
      label: "Logistics & Supply Chain",
      items: [],
      className:
        activeItem === "Logistics & Supply Chain" ? "active-menu-item" : "",
    },
    {
      label: "Pricing",
      command: () => handleNavClick("Pricing", "/pricing"),
      className: activeItem === "Pricing" ? "active-menu-item" : "",
    },
    {
      label: "Developer",
      command: () =>
        handleNavClick(
          "Developer",
          "https://yellow-ocean-07b319610.3.azurestaticapps.net/"
        ),
      className: activeItem === "Developer" ? "active-menu-item" : "",
    },
  ];

  const start = (
    <div className="d-flex gap-3 align-items-center">
      <FoundryLogo />
      <h6 className="mt-3">FOUNDRY</h6>
    </div>
  );

  const end = <Button title="Login" variant="primary" onClick={() => {}} />;

  return <Menubar model={items} start={start} end={end} />;
};
