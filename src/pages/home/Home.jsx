import React from 'react'
import { useState, useEffect } from 'react'
import { pokeData } from '../../services/Api'
import Cards from '../../components/cards/Cards'
import * as S from './Styled'

const Home = () => {
   const [database, setDatabase] = useState([])

   useEffect(() => {
      pokeData.get(`/pokemon/?limit=10`).then((response) => {
         const results = response.data.results
         results.map((pokemon) => {
            return(
               pokeData.get(`/pokemon/${pokemon.name}`).then((response) => {
                  setDatabase([...database, response.data])
               })
            )            
         })         
      })
   },[])

   console.log(database)
   return (
      <S.Container>
         <Cards
            databases={database}
         />
      </S.Container>
   )
}

export default Home
