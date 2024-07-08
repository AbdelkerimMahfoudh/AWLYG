import { FiMonitor } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import { LiaMixcloud } from "react-icons/lia";
const Services = () => {
    return (
        <div>
                <div className="service">
                    <h1>Nos domaines d'expertise</h1>
                    <p>Services</p>
                    <ul>
                        <li>
                            <h1>01</h1>
                            <p>Creation du solution web et mobiles adaptees</p>
                            <div className="card-1">
                                <FiMonitor /> Read more <FaLongArrowAltRight />
                            </div>
                        </li>
                        <li>
                        <h1>02</h1>
                            <p>Integration de solutions materielles</p>
                            <div className="card-2">
                                <CiSettings /> Read more <FaLongArrowAltRight />
                            </div>
                        </li>
                        <li>
                        <h1>03</h1>
                            <p>Solutions d'intelligence artificielle personalisees </p>
                            <div className="card-3">
                                <LuBrain />
                                Read more 
                                <button><FaLongArrowAltRight /></button>
                            </div>
                        </li>
                        <li>
                        <h1>04</h1>
                            <p>Hebergement et gestion de serveurs cloud</p>
                            <div className="card-4">
                                <LiaMixcloud /> Read more <FaLongArrowAltRight />
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Services