import CartWidget from "./CartWidget";
const NavBar = () =>{
    return(         <div className="container d-flex justify-content-center align-items-center"> 
                    <div className="my-2 container">
                    <ul className="nav">
                        <li className="nav-item  ">
                            <a className="nav-link text-dark" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Productos</a>
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