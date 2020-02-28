import React from "react";
 import styled from "styled-components"


 export default function CharacterCard(props) {

     const Card = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: green;
     margin: 5% 20% `


     const Header = styled.h2`
     font-size: 30px;
    `


   return(
     <Card>

       <Header>{props.name}</Header>
         <p>Species: {props.species}</p>
         <p>Status: {props.status}</p>
         <p>Gender: {props.gender}</p>

     </Card>

   )
 }
