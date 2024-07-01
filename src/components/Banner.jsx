import slider_info from '../Assets/images/slider_info.png'

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

                </li>
                <li>
                    
                </li>
            </ul>
            <button className='btn-aide'>Besoin d'aide</button>
            <button className='plus'>En savoir plus</button>
        </div>
    )
}

export default Banner