import { Link } from "react-router-dom"
import './navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <img className="logo" src="logo_cesar.svg"/>
            <ul>
                <li> <Link to='/' className="menu-li" >INICIO  </Link></li>
                <li> <Link to='/' className="menu-li" >SOBRE MI  </Link></li>
                <li> <Link to='/' className="menu-li" > CURRICULUM  </Link></li>
                <li> <Link to='/' className="menu-li" > PROYECTOS </Link></li>
                <li> <Link to='/' className="menu-li" > CONTACTO </Link></li>
            </ul>
        </div>
    )
}