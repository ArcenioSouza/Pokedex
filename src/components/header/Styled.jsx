import styled from "styled-components";

export const Container = styled.div `
   width: 100%;
   max-height: 300px;
   display: flex;
   padding: 10px;
   justify-content: space-around;

   img{
      width: 200px;
      height: 200px;
   }
`

export const SerchArea = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`

export const Input = styled.input `
   font-size: 1.2rem;
   border: 1px solid #000;
   border-radius: 5px;
   padding: 5px;
   text-align: center;
`
