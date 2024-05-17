import NavItem from "./NavItem/NavItem";
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
    { label: "Home", command: () => handleNavClick("Home", "/") },
    {
      label: "Business Automation",

      items: [],
    },
    {
      label: "Financial Services",
      items: [],
    },
    {
      label: "Use cases",
      items: [],
    },
    {
      label: "Logistics & Supply Chain",
      items: [],
    },
    {
      label: "Pricing",
      command: () => handleNavClick("Pricing", "/pricing"),
    },
    {
      label: "Developer",
      command: () =>
        handleNavClick(
          "Developer",
          "https://yellow-ocean-07b319610.3.azurestaticapps.net/"
        ),
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

  // return (
  //   <nav
  //     style={{
  //       display: "flex",
  //       justifyContent: "space-between",
  //       alignItems: "center",
  //       padding: "0 10rem",
  //       backgroundColor: "white",
  //     }}
  //   >
  //     <div className="d-flex gap-3 align-items-safe">
  //       <FoundryLogo />
  //       <h6 className="mt-3">FOUNDRY</h6>
  //     </div>
  //     <div style={{ display: "flex" }}>
  //       <NavItem
  //         label="Home"
  //         onClick={() => handleNavClick("Home", "/")}
  //         isActive={activeItem === "Home"}
  //       />
  //       <NavItem
  //         label="Business Automation"
  //         onClick={() =>
  //           handleNavClick("Business Automation", "/business-automation")
  //         }
  //         isActive={activeItem === "Business Automation"}
  //       />
  //       <NavItem
  //         label="Financial Services"
  //         onClick={() =>
  //           handleNavClick("Financial Services", "/financial-services")
  //         }
  //         isActive={activeItem === "Financial Services"}
  //         hasDropdown={true}
  //       />
  //       <NavItem
  //         label="Use cases"
  //         onClick={() => handleNavClick("Use cases", "/use-cases")}
  //         isActive={activeItem === "Use cases"}
  //         hasDropdown={true}
  //       />
  //       <NavItem
  //         label="Logistics & Supply Chain"
  //         onClick={() =>
  //           handleNavClick("Logistics and Supply Chain", "/logistics")
  //         }
  //         isActive={activeItem === "Logistics and Supply Chain"}
  //         hasDropdown={true}
  //       />
  //       <NavItem
  //         label="Pricing"
  //         onClick={() => handleNavClick("Pricing", "/pricing")}
  //         isActive={activeItem === "Pricing"}
  //         hasDropdown={true}
  //       />
  //       <NavItem
  //         label="Developer"
  //         onClick={() =>
  //           handleNavClick(
  //             "Developer",
  //             "https://yellow-ocean-07b319610.3.azurestaticapps.net/"
  //           )
  //         }
  //         isActive={activeItem === "Developer"}
  //       />
  //     </div>
  //     <Button title="Login" variant="primary" onClick={() => {}} />
  //   </nav>
  // );
};
