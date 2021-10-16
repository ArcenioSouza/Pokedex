import React from 'react'
import * as S from './Styled'

const Navbar = () => {
   return (
      <S.Container>
         <div>
            <img src="http://midia.gruposinos.com.br/_midias/jpg/2016/07/13/pikachu-1590127.jpg" alt="Pikachu" />
         </div>
         <S.SerchArea>
            <h1>My Pokedex</h1>
            <S.SerchArea>
               <label htmlFor="search">Search Pokemon</label>
               <S.Input type="text" name="search"/>
            </S.SerchArea>
           
         </S.SerchArea>
         <div>
            <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Foto-Ash-Pok%C3%A9mon-PNG-743x1024.png" alt="Ash" />
         </div>
      </S.Container>
   )
}

export default Navbar
