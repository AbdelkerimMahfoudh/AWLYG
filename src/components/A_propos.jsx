import a_propos from '../Assets/images/a_propos.jpeg'

const About = () => {
    return (
        <div>
            <aside>
                <div className="card-about">10+ <span>Projets realises avec succes</span></div>
                <img src={a_propos}></img>
            </aside>
        </div>
    )
}

export default About