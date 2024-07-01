import slider_info from '../Assets/images/slider_info.png'
import { TiMessages } from "react-icons/ti";
const Banner = () => {
    
    return (
        <div className='banner-container'>
            <table>
                <thead>
                    <tr>
                        <th rowspan="1"><p>Awlyg Tech - Votre partenaire pour un futur numérique prospère</p></th>
                        <th rowspan="3"><img src={slider_info}></img></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="1"><h1>Actualité et tendance de l'industrie</h1></td>
                    </tr>
                    <tr>
                        <td rowSpan="1"><TiMessages /></td>
                    </tr>
                    <tr>
                        <td rowSpan="1"><p>contact</p></td>
                        <td rowSpan="1"><h2>contact@awlyg.tech</h2></td>
                    </tr>
                </tbody>
            </table>
            {/* <
            <ul>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li>
                    
                </li>
                <li>
                    
                </li>
            </ul>
            <button className='btn-aide'>Besoin d'aide</button>
            <button className='plus'>En savoir plus</button> */}
        </div>
    )
}

export default Banner