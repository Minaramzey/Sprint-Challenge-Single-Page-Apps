import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";

export default function SearchForm() {
 
 
   
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const characters = response.data.results.filter(props =>
    props.name.toLowerCase().includes(query.toLowerCase())
    );

    setData (characters);
  });
},[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};
return (
  <div >
    <form >
      <input
      id="name" 
      type="text" 
      name="textfield" 
      placeholder="Search by Name"
      value={query} 
      onChange={handleInputChange}/>



    <Link to="/"><button>Home
          </button></Link>
    </form>

    {data.map((props => {
  return(
  <CharacterCard key={props.id} name={props.name} species
   ={props.species} status={props.status} gender={props.gender}/>)
}
))}

</div>
)}

