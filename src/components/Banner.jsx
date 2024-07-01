import slider_info from '../Assets/images/slider_info.png'
import { TiMessages } from "react-icons/ti";
const Banner = () => {
    
    return (
        <div className=''>
            <p>Awlyg Tech - Votre partenaire pour un futur numérique prospère</p>
            <ul>
                <li><h1>Actualité et tendance de l'industrie</h1></li>
                <li><img src={slider_info}></img></li>
            </ul>
            <ul>
                <li>
                    <TiMessages />
                </li>
                <li>
                    <p>contact</p>
                    <h2>contact@awlyg.tech</h2>
                </li>
            </ul>
            <button className='btn-aide'>Besoin d'aide</button>
            <button className='plus'>En savoir plus</button>
        </div>
    )
}

export default Banner