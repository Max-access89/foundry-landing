import React from "react";
import FloatingCard from "../Card/FloatingCard";
import InfoItem from "../InfoItem/InfoItem";
import "./Hero.css"; // Make sure the path to the CSS file is correct
import Button from "../Button/Button";
import { AutomationIcon, FinanceIcon } from "../Icons/Icons";

interface HeroProps {
  headerTitle: string;
  subtitle?: string;
  listitems?: boolean;
  isCard?: boolean;
  cardContent?: React.ReactNode;
}

const Hero = ({
  headerTitle,
  subtitle,
  listitems,
  isCard,
  cardContent,
}: HeroProps) => {
  return (
    <div
      className="d-flex hero-container"
      style={{ backgroundColor: isCard ? "white" : "inherit" }}
    >
      <div className="d-flex flex-column flex-1">
        <div
          className="hero-title"
          style={{
            padding: !subtitle ? "3rem" : "3rem 0rem",
            maxWidth: !subtitle ? "50%" : "70%",
          }}
        >
          <h1>{headerTitle}</h1>
          <p className="hero-subtitle">{subtitle}</p>
        </div>

        {listitems && (
          <div className="d-flex gap-5 info-container">
            <InfoItem
              icon={<AutomationIcon />}
              title="Business Automation"
              description="Optimize your workflow, enhance efficiency through automation, and unlock new revenue streams on the trusted software and hardware platform used by businesses"
            />
            <InfoItem
              icon={<FinanceIcon />}
              title="Financial Services"
              description="Digital Finance is paving the way for embedded finance. Foundry Digital Banking Platform empowers Financial Institutions in their Digital Transformation"
            />
          </div>
        )}
      </div>

      <div className="d-flex flex-column flex-1">{cardContent}</div>
    </div>
  );
};

export default Hero;