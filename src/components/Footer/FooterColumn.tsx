import React from "react";

interface FooterColumnProps {
  title: string;
  links: { name: string; url: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      {links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default FooterColumn;
