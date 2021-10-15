import React from 'react'
import { useState, useEffect } from 'react'
import { pokeData } from '../../services/Api'
import Cards from '../../components/cards/Cards'
import * as S from './Styled'

const Home = () => {
   const [database, setDatabase] = useState([])

   useEffect(() => {
      pokeData.get("/?limit=20").then((response) => setDatabase(response.data.results))
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
