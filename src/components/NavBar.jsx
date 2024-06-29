import { useState } from 'react';
import Awlyg from '../Assets/images/Awlyg.png'
import { MdMenu } from "react-icons/md";

const NavBar = () => {
    const [active, setActive] = useState('home')
    const handleChange = (link) => {
        setActive(link);
    }
    return(
        <nav className='Navbar'> 
            <ul className='nav-items'>        
                <li className="Logo">
                    <img src={Awlyg}></img>
                </li>
                <li className="headers">
                    <a href="#home" className={active === 'home' ? 'active' : ''} onClick= { ()=> handleChange('home')}>Accueil</a>
                    <a href="#services" className={active === 'services' ? 'active' : ''} onClick= { ()=> handleChange('services')}>Services</a>
                    <a href="#blog" className={active === 'blog' ? 'active' : ''} onClick= { ()=> handleChange('blog')}>Blog</a>
                    <a href="#about" className={active === 'about' ? 'active' : ''} onClick= { ()=> handleChange('about')}>Qui Sommes-nous</a>
                    <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick= { ()=> handleChange('contact')}>Contact</a>
                </li>
                <li className="toggle-bar">
                    <MdMenu />
                </li>
            </ul>    
        </nav>
    )
}

export default NavBar