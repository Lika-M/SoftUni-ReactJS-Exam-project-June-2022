// import { useContext } from 'react';
// import { DataContext } from '../../contexts/DataContext.js';
// import { PlantCard } from '../Catalog/PlantCard/PlantCard.js';
// import PlantList from './PlantList/PlantList.js';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    // const { plants } = useContext(DataContext);
    
    return (
        <>
            <section id="hero">
                <div className="overlay">
                    <h1 className="hero-title">Home garden experts</h1>
                    <h3 className="hero-subtitle">Think of your garden, or any outside space, as an extension of your home or an “outdoor room”. But let’s not forget that this room is different, because it is outdoors. Which means as well as enjoying extra space, you can surround it with plants and life and bring you, your family, and friends, closer to nature as well.</h3>
                    <div className="hero-hashtag">
                      {[...Array(8)].map((x, i )=>(<h2 className="hero-hashtag" key={i}>#GreenDesign</h2>))}
                    </div>
                </div>

            </section>
            <section className="site-content">
                <h1>Create the garden you’ve always wanted</h1>
                <div className="site-content-wrapper">
                    <article className="site-content-item">
                        <Link to="/about"><img src="https://www.gardenia.net/public/Front/images/btn-ideas.png" alt="ideas-1" /></Link>
                        <h3>Get garden design ideas</h3>
                        <p>Find your perfect garden</p>
                    </article>
                    <article className="site-content-item">
                       <Link to="/catalog"><img src="https://www.gardenia.net/public/Front/images/btn-plants.png" alt="ideas-2" /></Link>
                        <h3>Find the plants that work for you</h3>
                        <p>Ideas for seasons and regions</p>
                    </article>
                    <article className="site-content-item">
                       <Link to="/create"><img src="https://www.gardenia.net/public/Front/images/btn-design.png" alt="ideas-3" /></Link>
                        <h3>Draft your favorite plant list</h3>
                        <p>Add photos of your dream garden plants</p>
                    </article>
                </div>
                <h3>
                    Just send us photos of your beautiful plants. Gather ideas and plan or transform your home garden.
                </h3>
                <h3> It's what all these lovely customers did!</h3>
            </section>
          

        </>);
}
