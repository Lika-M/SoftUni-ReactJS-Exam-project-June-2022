import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext.js';
import { PlantCard } from '../Catalog/PlantCard/PlantCard.js';
import './Home.css';

export default function Home() {
    const {plants} = useContext(DataContext);
    console.log((plants));

    return (
        <>
            <section id="hero">
                <div className="overlay">
                    <h1 className="hero-title">Home garden experts</h1>
                    <h3 className="hero-subtitle">Our Green Planet is a digital initiative to raise awareness for the beauty and fragility of our planet’s green ecosystems, forging a deeper understanding of the important role that plants play in biodiversity, and to be inspired from the stories from people around the globe dedicating their lives for change.</h3>
                    <div className="hero-hashtag">
                    <h2 className="hero-hashtag"> #OurGreenPlanet</h2>
                    <h2 className="hero-hashtag"> #OurGreenPlanet</h2>
                    <h2 className="hero-hashtag"> #OurGreenPlanet</h2>
                    <h2 className="hero-hashtag"> #OurGreenPlanet</h2>
                    <h2 className="hero-hashtag"> #OurGreenPlanet</h2>
                    <h2 className="hero-hashtag"> #OurGreenPlanet</h2>
                    <h2 className="hero-hashtag"> #OurGreenPlanet</h2>
                    </div>
                </div>

            </section>
            <section id="plants">
                <h2 className="plants-title">Our Plant Listings</h2>
                
                {plants.items.length > 0
                    ? <ul className="plants-list">
                        {plants.items.map(x => <PlantCard key={x._id} plant={x} />)}
                    </ul>
                    : <p style={{fontSize: "20px"}}>No plants in Database</p>}
            </section>

        </>);
}