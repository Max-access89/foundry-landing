import React from "react";
import { FaceBookIcon, InstaIcon, LinkedinIcon, XIcon } from "../Icons/Icons";
import "./SocialMedia.css";

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media-container">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaceBookIcon />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <XIcon />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <InstaIcon />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
