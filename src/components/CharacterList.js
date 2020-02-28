import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard.js";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  

  useEffect(() => {
    axios
    .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then((response) => {
      setCharacter(response.data.results);
console.log(response);

    })
    .catch(error => {
      console.error('Now You Fucked Up Homie kek', error);
    });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);



  

  return (
    <section className="character-list">
        <Link to= "/"><button>Home</button></Link>
        <Link to="/Search"><button>Search
           </button></Link>

       {character.map(props => (
             <CharacterCard  key={props.id} name={props.name}
             species={props.species} status={props.status} gender={props.gender} />

       ))}
    </section>
  );
}
