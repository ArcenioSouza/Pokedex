import React from "react";
import Card from "../card/Card";

const Cards = ({ databases }) => {

  return (
    <div>
      {databases.map((database) => {
        return (
          <Card
            key={database.id}
            id={database.id}
            name={database.name}
            image={database.sprites.front_default}
            type={database.types[0].type.name}
          />
        );
      })}
    </div>
  );
};

export default Cards;
