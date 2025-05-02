import React, { useState } from "react";
import cardsData from "../../data/cardsData";
import SingleCard from "../SingleCard/SingleCard";
import "./CardList.css";
const CardList = () => {
  const [howIsExpand, setHowIsExpand] = useState(4);

  return (
    <div className="parent">
      {cardsData.map((card) => (
        <div
          className={`card  ${
            howIsExpand === card.id ? "expanded" : "collapsed"
          } div${card.id}`}
          style={{ padding: "0 !important", margin: "0 !important" }}
          onClick={() => setHowIsExpand(card.id)}
          key={card.id}>
          <SingleCard card={card} howIsExpand={howIsExpand} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
