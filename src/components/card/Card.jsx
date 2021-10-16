import React from 'react'
import * as S from './Styled'

const Card = ({id, image, name, type}) => {

   return (
      <S.Container color={type}>
         <p>{id}</p>
         <h1>{name}</h1>
         <img src={image} alt={name} />
         <p>{type}</p> 
      </S.Container>
   )
}

export default Card
