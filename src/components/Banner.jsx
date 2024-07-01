import slider_info from '../Assets/images/slider_info.png'
import { TiMessages } from "react-icons/ti";
const Banner = () => {
    
    return (
        <div className='banner-container'>
            <aside>
                <p>Awlyg Tech - Votre partenaire pour un futur numérique prospère</p>
                <h1>Actualité et tendance de l'industrie</h1>
                <div className=''>
                    
                    <ul className='banner-contact'>
                        <li className='msg-icon'><TiMessages/></li>
                        <li>   
                            <p>Contact</p>
                            <a href='#'>contact@awlyg.tech</a>
                        </li>
                    </ul>
                </div>
                <button className='btn-aide'>Besoin d'aide</button>
                <button className='plus'>En savoir plus</button>
            </aside>
            <img src={slider_info}></img>
        </div>
    )
}

export default Banner