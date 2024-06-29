import Awlyg from '../Assets/images/Awlyg.png'
import { MdMenu } from "react-icons/md";
const NavBar = () => {

    return(
        <nav className='Navbar'> 
            <ul className='nav-items'>        
                <li className="Logo">
                    <img src={Awlyg}></img>
                </li>
                <li className="headers">
                    <a href="#">Accueil</a>
                    <a href="#">Services</a>
                    <a href="#">Blog</a>
                    <a href="#">Qui Sommes-nous</a>
                    <a href="#">Contact</a>
                </li>
                <li className="toggle-bar">
                    <MdMenu />
                </li>
            </ul>    
        </nav>
    )
}

export default NavBar