import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

import './Catalog.css';
import {PlantCard} from '../PlantCard/PlantCard.js'
import * as dataService from '../../services/dataService';


export default function Catalog() {
        const [plants, setPlants] = useState([]);

        useEffect(()=> {
            dataService.getAll()
                .then(data => {
                    setPlants(data);
                })
    }, [])

    
    return (

        <section id="plants">
            <h2 className="plants-title">All Listings</h2>
            <ul className="plants-list">

            {plants.map(x => <PlantCard key={x._id} data={x} />)}

                {/* <li className="plants-item">
                    <img src="https://previews.123rf.com/images/innagiliarova/innagiliarova2003/innagiliarova200300063/142634383-fantastic-acer-palmatum-palmate-maple-maple-tree-with-bright-red-foliage-little-maple-with-juicy-lea.jpg" alt='plant2' />
                    <div className="plants-item-info">
                        <h3 className="plants-item-name">Japanese maple
                            <span className="action">
                                <i className="fa-solid fa-arrow-down"></i>
                            </span>
                        </h3>
                        <p className="plants-item-latin">Acer palmatum</p>
                        <p className="plants-item-latin">Tree</p>
                        <p className="plants-item-text">
                            This is a species of woody plant native to Japan, Korea and China. Many different cultivars of this maple have been selected and they are grown worldwide for their large variety of attractive forms, leaf shapes, and spectacular colors.
                        </p>
                        <Link className="details-btn" to="details">Details</Link>
                    </div>
                </li>
                <li className="plants-item">
                    <img src="https://previews.123rf.com/images/naiyanab/naiyanab1204/naiyanab120400001/12988750-colorful-bougainvillea-flower.jpg" alt='plant1' />
                    <div className="plants-item-info">
                        <h3 className="plants-item-name">Bougainvillea flower
                            <span className="action">
                                <i className="fa-solid fa-arrow-down"></i>
                            </span>
                        </h3>
                        <p className="plants-item-latin">Bougainvillea glabra</p>
                        <p className="plants-item-text">
                            Bougainvillea is a genus of thorny ornamental vines, bushes, and trees belonging to the four o' clock family, Nyctaginaceae. It is native to eastern South America, found from Brazil, west to Peru, and south to southern Argentina.
                        </p>
                        <Link className="details-btn" to="details">Details</Link>
                    </div>
                </li>
                <li className="plants-item">
                    <img src="https://previews.123rf.com/images/annanel/annanel2207/annanel220700204/188739093-a-liriodendron-tulipifera-beautiful-ornamental-tree-in-bloom-flowering-yellow-orange-flowers.jpg" alt="plant3" />
                    <div className="plants-item-info">
                        <h3 className="plants-item-name">
                            Tulip tree
                            <span className="action">
                                <i className="fa-solid fa-arrow-down"></i>
                            </span>
                        </h3>
                        <p className="plants-item-latin">Liriodendron tulipifera</p>
                        <p className="plants-item-text">
                        It is native to eastern North America from Southern Ontario and possibly southern Quebec to Illinois eastward to southwestern Massachusetts and Rhode Island, and south to central Florida and Louisiana. 
                        </p>
                        <Link className="details-btn" to="details">Details</Link>
                    </div>
                </li>
                <li className="plants-item">
                    <img src="https://previews.123rf.com/images/kornyeyeva/kornyeyeva1802/kornyeyeva180200258/97961656-strelitzia-reginae-a-bird-of-paradise.jpg" alt="plant3" />
                    <div className="plants-item-info">
                        <h3 className="plants-item-name">
                            Bird of paradise flower
                            <span className="action">
                                <i className="fa-solid fa-arrow-down"></i>
                            </span>
                        </h3>
                        <p className="plants-item-latin">Strelitzia reginae</p>
                        <p className="plants-item-text">
                            Strelitzia is a genus of five species of perennial plants, native to South Africa. It belongs to the plant family Strelitziaceae. The genus is named after Queen Charlotte of the United Kingdom. It is the floral emblem of the City of Los Angeles.
                        </p>
                        <Link className="details-btn" to="details">Details</Link>
                    </div>
                </li>
                <li className="plants-item">
                    <div className="plant-item-img-wrapper"></div>
                    <img src="https://previews.123rf.com/images/ikuya/ikuya1606/ikuya160600400/60892637-japanese-kerria-flower-yamabuki-.jpg" alt='plant2' />
                    <div className="plants-item-info">
                        <h3 className="plants-item-name">
                            Japanese maple
                            <span className="action">
                                <i className="fa-solid fa-arrow-down"></i>
                            </span>
                        </h3>
                        <p className="plants-item-latin">Acer palmatum</p>
                        <p className="plants-item-text">
                            This is a species of woody plant native to Japan, Korea and China. Many different cultivars of this maple have been selected and they are grown worldwide for their large variety of attractive forms, leaf shapes, and spectacular colors.
                        </p>
                        <Link className="details-btn" to="details">Details</Link>
                    </div>
                </li> */}
            </ul>
        </section>
    );
}
