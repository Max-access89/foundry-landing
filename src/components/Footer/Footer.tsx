import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css"; // Make sure to import the CSS file
import { AppstoreIcon, FoundryLogoWhite, PlaystoreIcon } from "../Icons/Icons";
import FooterColumn from "./FooterColumn";

const Footer: React.FC = () => {
  const accountLinks = [
    { name: "My Account", url: "#" },
    { name: "Order History", url: "#" },
    { name: "Shopping", url: "#" },
    { name: "Wishlist", url: "#" },
  ];

  const helpLinks = [
    { name: "Contact", url: "#" },
    { name: "FAQs", url: "#" },
    { name: "Terms & Condition", url: "#" },
    { name: "Privacy Policy", url: "#" },
  ];

  const proxyLinks = [
    { name: "About", url: "#" },
    { name: "Shop", url: "#" },
    { name: "Product", url: "#" },
    { name: "Track Order", url: "#" },
  ];

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-section">
          <FoundryLogoWhite />
          <p>Creating innovative solutions for tomorrow.</p>
          <SocialMedia />
        </div>

        <div className="footer-section footer-links-container">
          <FooterColumn title="My Account" links={accountLinks} />
          <FooterColumn title="Help" links={helpLinks} />
          <FooterColumn title="Proxy" links={proxyLinks} />
        </div>

        <div className="footer-section">
          <h4>Download Mobile App</h4>
          <div className="download-links mt-3">
            <a
              href="https://play.google.com/store/apps/details?id=example.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlaystoreIcon />
            </a>
            <a
              href="https://apps.apple.com/app/idexample"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppstoreIcon />
            </a>
          </div>
        </div>
      </footer>
      <div>
        <hr />
        <p className="roboto-thin" style={{ textAlign: "center" }}>
          Foundry &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
