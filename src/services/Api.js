import axios from "axios";

export const pokeData = axios.create({
   baseURL: "https://pokeapi.co/api/v2/pokemon"
})

/* export async function getPokemon(){
   let response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
   let result = await response.json()
   return result["results"]
} */