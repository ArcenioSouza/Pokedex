import React from "react";
import { useState, useEffect } from "react";
import { pokeData } from "../../services/Api";
import Cards from "../../components/cards/Cards";
import * as S from "./Styled";

const Home = () => {
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    pokeData.get(`/pokemon/?limit=10`).then((response) => {
      const results = response.data.results;
      
      Promise.all(
        results.map(async (pokemon) => {
          const response = await pokeData.get(`/pokemon/${pokemon.name}`);
          return response.data
        })
      ).then(
         (data) => setDatabase(data)
      )
      console.log(database)     
    });
  }, []);

  return (
    <S.Container>
      <Cards databases={database} />
    </S.Container>
  );
};

export default Home;
