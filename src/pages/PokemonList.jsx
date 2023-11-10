import { useState,useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const PokemonList = () =>{

const [data, setData] = useState()
const [isLoading,setIsLoading] = useState(true)

useEffect(()=>{

const fetchData = async()=>{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1017")
    // console.log(response.data);
    setData(response.data)
    setIsLoading(false)

}
fetchData()

},[])


return isLoading? <p className="loading">Chargement ... </p> : (
    
        <>
        <div className="h1">
          <h1>Choisis ton Pokémon</h1>
        </div>       
        <main className="mainlist">    
        {data.results.map((pokemon,index)=>{
            console.log(pokemon);
            return (               
            <Link to={"/pokemon/" + pokemon.name} style={{textDecoration:"none", color: "inherit"}} key={pokemon.name} className="pokemonlist">
                <p>{pokemon.name}</p>

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt="" />          
            </Link>)
        })}
        </main>     
         </>
   
)}

export default PokemonList