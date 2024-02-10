import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = () =>{
    return(         <div className="container d-flex justify-content-center align-items-center"> 
                    <div className="my-2 container">
                    <ul className="nav">
                        <li className="nav-item  ">
                            <NavLink className="nav-link text-dark" aria-current="page" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" aria-current="page" to={"/contenido"}>Contenido</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" aria-current="page" to={"/categoria/clothing"}>Ropa</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" aria-current="page" to={"/categoria/homedecor"}>Decoracion</NavLink>
                        </li>

                    </ul>
                    </div>
                    <div className="my-2">
                    <CartWidget/>
                    </div>
                    </div>
                    
            )
}

export default NavBar;