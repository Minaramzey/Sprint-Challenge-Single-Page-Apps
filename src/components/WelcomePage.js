import React from "react";
import {Link} from "react-router-dom";
import  styles from "styled-components";


const Buttons = styles.button`
display:flex;
justify-content:center;
margin-left:45%;
margin-top: 2%;
`

const Img = styles.img`
margin-left: 35%;`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
       
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /><br/>
         <Link to="/Characters"><Buttons>Characters
          </Buttons></Link>
          <Link to="/Search"><Buttons>Search
          </Buttons></Link>
      </header>
    </section>
  );
}
