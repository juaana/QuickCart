import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = () =>{
    return(         <div className="container d-flex justify-content-center align-items-center"> 
                    <div className="my-2 container">
                    <ul className="nav">
                        <li className="nav-item  ">
                            <Link className="nav-link text-dark" aria-current="page" to={"/"}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to={"/contenido"}>Contenido</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to={"/categoria/clothing"}>Ropa</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-dark" aria-current="page" to={"/categoria/homedecor"}>Decoracion</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Sobre nosotros</a>
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