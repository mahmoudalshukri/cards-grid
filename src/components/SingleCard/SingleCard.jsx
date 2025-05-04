import React from "react";
import "./SingleCard.css";
import { CiHeart, CiStar, CiCalendar, CiPhone, CiBellOn } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import { FaExpandAlt } from "react-icons/fa";
import { RiCollapseDiagonalLine } from "react-icons/ri";

const SingleCard = ({ card, howIsExpand }) => {
  return (
    <>
      <div className="cardHeader">
        <div className="img">
          <img src={card.image} alt="personalImage" />
          <div
            className={`dot ${
              card.availability === "Available now" ? "active" : "notActive"
            }`}></div>
        </div>
        <div className="info">
          <div className="name">
            <h1>
              {card.name}, {card.age}
            </h1>
            <p>{card.gender}</p>
          </div>
          <div className="status">
            <img src="clock.png" alt="" />
            <span
              className={` statusText ${
                card.availability === "Available now" ? "active" : "notActive"
              }`}>
              {card.availability}
            </span>
          </div>
        </div>
        <div className="icon">
          {card.availability === "Available now" ? (
            <CiPhone color="#fff" size="1.5em" />
          ) : (
            <CiBellOn color="#fff" size="1.5em" />
          )}
        </div>
      </div>
      <div className="spechalization">
        <span>self-esteem</span>
        <span>cultural-identity</span>
        <span>relationships</span>
        {card.specializations.map((sp, index) => {
          <span id={index}>{sp}</span>;
        })}
      </div>
      <div className="cardBody">
        <p>{card.description}</p>
      </div>
      <div className="expanded-content">
        <div className="stats">
          <div className="stat">
            <div className="icon">
              <CiStar color="#8a2be2" size="1.5em" />
            </div>
            <div className="value">{card.rating}/5</div>
            <div className="label">Rating</div>
          </div>
          <div className="stat">
            <div className="icon">
              <FiMessageCircle color="#8a2be2" size="1.2em" />
            </div>
            <div className="value">{card.sessions}+</div>
            <div className="label">Sessions</div>
          </div>
          <div className="stat">
            <div className="icon">
              <CiHeart color="#8a2be2" size="1.5em" />
            </div>
            <div className="value">{card.helped}+</div>
            <div className="label">Helped</div>
          </div>
          <div className="stat">
            <div className="icon">
              <SlPeople color="#8a2be2" size="1.2em" />
            </div>
            <div className="value">{card.returnRate}%</div>
            <div className="label">Return Rate</div>
          </div>
        </div>
        <div className="availability-section">
          <strong>
            <CiCalendar color="#8a2be2" size="1.5em" /> Available
          </strong>
          <div className="days">
            {card.dates?.map((date, index) => (
              <div key={index}>{date}</div>
            ))}
          </div>
        </div>
        <div className="languages-section">
          <strong>Languages</strong>
          <div className="languages">
            {card.languages.map((language, index) => (
              <span className="tag" key={index}>
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="cardFooter">
        {howIsExpand === card.id ? (
          <RiCollapseDiagonalLine color="#5c5c5c" size="1.5em" />
        ) : (
          <FaExpandAlt color="#5c5c5c" size="1.5em" />
        )}
      </div>
    </>
  );
};

export default SingleCard;
