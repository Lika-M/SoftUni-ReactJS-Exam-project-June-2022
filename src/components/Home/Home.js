import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext.js';
// import { PlantCard } from '../Catalog/PlantCard/PlantCard.js';
import PlantList from './PlantList/PlantList.js';
import './Home.css';

export default function Home() {
    const { plants } = useContext(DataContext);
    console.log((plants));

    return (
        <>
            <section id="hero">
                <div className="overlay">
                    <h1 className="hero-title">Home garden experts</h1>
                    <h3 className="hero-subtitle">Think of your garden, or any outside space, as an extension of your home or an “outdoor room”. But let’s not forget that this room is different, because it is outdoors. Which means as well as enjoying extra space, you can surround it with plants and life and bring you, your family, and friends, closer to nature as well.</h3>
                    <div className="hero-hashtag">
                        <h2 className="hero-hashtag"> #Green Design</h2>
                        <h2 className="hero-hashtag"> #Green Design</h2>
                        <h2 className="hero-hashtag"> #Green Design</h2>
                        <h2 className="hero-hashtag"> #Green Design</h2>
                        <h2 className="hero-hashtag"> #Green Design</h2>
                        <h2 className="hero-hashtag"> #Green Design</h2>
                        <h2 className="hero-hashtag"> #Green Design</h2>
                        <h2 className="hero-hashtag"> #Green Design</h2>
                    </div>
                </div>

            </section>
            <section className="site-content">
                <h1>Create the garden you’ve always wanted</h1>
                <div className="site-content-wrapper">
                    <article className="site-content-item">
                        <img src="https://www.gardenia.net/public/Front/images/btn-ideas.png" alt="ideas-1" />
                        <h3>Get garden design ideas</h3>
                        <p>Find your perfect garden</p>
                    </article>
                    <article className="site-content-item">
                        <img src="https://www.gardenia.net/public/Front/images/btn-plants.png" alt="ideas-2" />
                        <h3>Find the plants that work for you</h3>
                        <p>Ideas for seasons and regions</p>
                    </article>
                    <article className="site-content-item">
                        <img src="https://www.gardenia.net/public/Front/images/btn-design.png" alt="ideas-3" />
                        <h3>Design your garden</h3>
                        <p>Add photos of your dream garden plants</p>
                    </article>
                </div>
                <h2>
                    Just send us photos of your beautiful plants. Gather ideas and plan or transform your home garden. It's what all these lovely customers did!
                </h2>
            </section>
            <section className="home-card">
                <h2>Our Plant List</h2>
                {plants.items.length > 0
                    ? plants.items.map(x => <PlantList key={x._id} plant={x} />)
                    : <h3 className="no-articles">No articles yet</h3>}


            </section>

        </>);
}
