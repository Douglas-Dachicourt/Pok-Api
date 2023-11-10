import {useState,useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const PokemonInfo = ()=>{

     const params = useParams()
     const name = params.name
     const [data,setData] = useState()
     const [isLoading,setIsLoading]= useState(true)


useEffect(()=>{


const fetchData= async()=>{

     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
     // console.log(response.data);
     setData(response.data);
     setIsLoading(false)
}

fetchData()


},[name])


return isLoading? <p className="loading">Chargement ...</p> : (
     
<>

  <div className="title-info">
    <h1>Pokémon</h1>
  </div>
     <article className="infos">
          <div className="pokename">
            <h2>{data.name}</h2>
            <img src={data.sprites.front_default} alt="" />
          </div>
          <div className="pokeskills">
               {data.types.map((info)=>{
                    // console.log(info.slot);
                    return <p key={info.type.url}>                       
                         {info.type.name}
                   </p>
               })}
          </div>         
     </article>


     </>
)



}


export default PokemonInfo