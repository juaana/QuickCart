import { NavLink } from "react-router-dom"
import L from "../assets/logo.png"
const Logo = () =>{
    return (
        <NavLink to={"/"}>
            <img src={L} alt="" />
        </NavLink>
    )
}
export default Logo;