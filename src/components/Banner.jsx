import slider_info from '../Assets/images/slider_info.png';
import { TiMessages } from "react-icons/ti";

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="grid-container">
                <div className="grid-item title">Awlyg Tech - Votre partenaire pour un futur numérique prospère</div>
                <div className="grid-item image"><img src={slider_info} alt="Slider Info"></img></div>
                <div className="grid-item news">Actualité et tendance de l'industrie</div>
                <div className="grid-item icon"><TiMessages /></div>
                <div className="grid-item contact-text">contact</div>
                <div className="grid-item contact-email">contact@awlyg.tech</div>
            </div>
            <button className='btn-aide'>Besoin d'aide</button>
            <button className='plus'>En savoir plus</button>
        </div>
    );
}

export default Banner;