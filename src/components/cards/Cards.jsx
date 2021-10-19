import React from "react";
import styled from "styled-components";
import Card from "../card/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 260px;
  overflow-y: scroll;
`;

const Cards = ({ databases }) => {
  return (
    <Container>
      {!!databases &&
        databases.map((database) => {
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
    </Container>
  );
};

export default Cards;
