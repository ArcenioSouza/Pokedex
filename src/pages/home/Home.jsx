import React from "react";
import { useState, useEffect } from "react";
import { pokeData } from "../../services/Api";
import Cards from "../../components/cards/Cards";
import * as S from "./Styled";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    //Fiz o get de 10 pokemons e peguei as informações que estavam em results (name e url)
    pokeData.get(`/pokemon/?limit=60`).then((response) => {
      const results = response.data.results; 
    
    //Aqui eu fiz um map em results e utilizei a informação name para fazer outra request que me retorna as informações de cada pokemon como habilidades, tipo, imagem. Coloquei a request dentro de um 'Promise.all' e fiz um set como resposta da Promise pq sem a Promise as requests estavam acontecendo, mas o set estava sobrepondo um ao outro. 
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
  },[]);

  return (
    <S.Container>
      <Navbar/>
      <Cards databases={database} />
      <Footer databases={database}/>
    </S.Container>
  );
};

export default Home;
