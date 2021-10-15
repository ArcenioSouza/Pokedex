import React from "react";
import Card from "../card/Card";

const Cards = ({ databases }) => {

  return (
    <div>
      {databases.map((database, index) => {
        return (
          <Card
            key={index}
            name={database.name}
            image={database.sprites.front_default}
          />
        );
      })}
    </div>
  );
};

export default Cards;
