import { FiMonitor, FaLongArrowAltRight, CiSettings, LuBrain, LiaMixcloud } from "react-icons/fi";
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
                            <div className="">
                                <FiMonitor /> Read more <FaLongArrowAltRight />
                            </div>
                        </li>
                        <li>
                        <h1>01</h1>
                            <p>Integration de solutions materielles</p>
                            <div className="">
                                <CiSettings /> Read more <FaLongArrowAltRight />
                            </div>
                        </li>
                        <li>
                        <h1>01</h1>
                            <p>Solutions d'intelligence artificielle personalisees </p>
                            <div className="">
                                <LuBrain /> Read more <FaLongArrowAltRight />
                            </div>
                        </li>
                        <li>
                        <h1>01</h1>
                            <p>Hebergement et gestion de serveurs cloud</p>
                            <div className="">
                                <LiaMixcloud /> Read more <FaLongArrowAltRight />
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Services