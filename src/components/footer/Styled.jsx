import styled from "styled-components"

export const Container = styled.div `
   width: 100%;
   padding: 5px;
   text-align: center;
   font-weight: bold;
`

export const Title = styled.div `
   display: flex;
   justify-content: center;
`

export const Images = styled.div `
   width: 100%;
   display: flex;
`

export const ImgPoke = styled.div `
   display: flex;
   width: 80%;
   align-items: center;
   overflow-x: scroll;

   img{
      width: 100px;
      height: 130px;
   }
`

export const ImgAsh = styled.div `
   width: 20%;
   display: flex;
   justify-content: end;
   

   img{
      width: 150px;
      height: 200px;
   }
`