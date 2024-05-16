import React from "react";
import "./Card.css"; // Importing CSS for styling
import Card from "./Card";
import { ArrowRightIcon } from "../Icons/Icons";
import metalRing from "../../Assets/MetallicRing.png";

const FloatingCard = ({ topImage, onButtonClick }: any) => {
  return (
    <div className="card-container">
      <img src={topImage} alt="fore" className="top-image" />
      <div className="p-4 mt-5">
        <Card
          backgroundImage={metalRing}
          backgroundPosition="top"
          buttonLabel={
            <div>
              <span className="p-0 d-flex align-items-center gap-2">
                Get In Touch <ArrowRightIcon />
              </span>
            </div>
          }
          onButtonClick={onButtonClick}
        >
          <div className="text-white mb-4" style={{ marginTop: "8.5rem" }}>
            Maximize your sales with easy-to-use, reliable, and fast in-store
            POS system and payment solutions. Find out how our POS system can
            benefit your business.
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FloatingCard;
