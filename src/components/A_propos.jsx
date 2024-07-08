import a_propos from '../Assets/images/a_propos.jpeg'

const About = () => {
    return (
        <div className='A-propos'>
            <aside>
                <div className="card-about"><span id='num'>10</span>+<br></br><span id='realise'>Projets realises <br></br>avec succes</span></div>
                <img src={a_propos}></img>
            </aside>
            <main>
                <div>
                    <h3>À propos de notre entreprise</h3>
                    <h1>AWLYG TECH en quelques mots</h1>
                    <p>AWLYG TECH est une entreprise de prestation de services spécialisée dans le numérique créée en 2022. Nous nous concentrons sur la fourniture des solutions pour aider nos clients à améliorer leur efficacité et leur productivité dans le numérique.</p>
                    <h2>Ce qui nous distingue</h2>
                    <ul>
                        <li>Produits de qualité supérieure</li>
                        <li>Solutions avec hardware maîtrisées</li>
                        <li>Présence sur toute la chaîne de production</li>
                        <li>Support technique disponible et efficace</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default About