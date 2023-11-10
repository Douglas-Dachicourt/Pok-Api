import { Link } from "react-router-dom"

const Header = () =>{
    return <header>
        <div>
            <Link to={"/home/"}>
              <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />  
            </Link>           
        </div>
        <div>
            <Link to={"/pokemon/"} style={{textDecoration:"none", color:"black"}}>
              <span>Pokémons</span>
            </Link>
            
            <span>Types</span>
        </div>
    </header>
}


export default Header