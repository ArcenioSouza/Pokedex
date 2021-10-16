import React from 'react'
import * as S from './Styled'


const Footer = ({databases}) => {
   return (
      <S.Container>
         <S.Title>
            <h1>My Pokemons</h1>
         </S.Title>
         <S.Images>
            <S.ImgPoke>
               {databases.map((dataImage) => {
                  return(
                     <img src={dataImage.sprites.front_default} alt="footerPokemon" />            
                  )
               })}
            </S.ImgPoke>
            <S.ImgAsh>
               <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Ash-Pok%C3%A9mon-com-Fundo-Transparente.png" alt="Ash-e-pikachu" />
            </S.ImgAsh>        
         </S.Images>
         <p>Desenvolvido por Arcenio Souza</p>
      </S.Container> 
   )     
}

export default Footer
