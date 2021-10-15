import React from 'react'
import * as S from './Styled'

const Card = ({image, name}) => {

   return (
      <S.Container>
            <h1>{name}</h1>
            <img src={image} alt={name} /> 
      </S.Container>
   )
}

export default Card
