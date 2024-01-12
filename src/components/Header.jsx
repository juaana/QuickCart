import Logo from "./Logo"
import NavBar from "./NavBar"
const Header=()=>{
    return(
        <div className="container my-2 margin-top={10}"> 
            <div className="row">
                <div className="col-md-4 d-flex align-items-center">
                    <Logo/>
                </div>
                <div className="col-md-8 d-flex justify-content-end align-items-center">
                    <NavBar/>
                </div>
            </div>        
        </div>
    )
}


export default Header;