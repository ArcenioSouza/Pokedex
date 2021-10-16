import styled from "styled-components";

export const Container = styled.div `
   width: 250px;
   height: 250px;
   border: 2px solid;
   border-color: ${props => props.color === 'grass' ? "green" : props.color === "water" ? "blue" : "red" };
   border-radius: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin: 5px;
`

