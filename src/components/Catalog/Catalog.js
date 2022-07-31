import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { PlantCard } from './PlantCard/PlantCard.js'
import * as dataService from '../../services/dataService.js';
import './Catalog.css';

export default function Catalog() {
    const [plants, setPlants] = useState({ items: [], currentType: 'all' });
    const { type } = useParams();
    useEffect(() => {
        dataService.getAll(type[0].toUpperCase() + type.slice(1))
            .then(result => {
                setPlants({ items: result, currentType: type });
            })
    }, [type])

    return (
        <section id="plants">
            {/* <h2 className="plants-title">All Listings</h2> */}
            <nav className="plants-navbar">
                <ul className="plants-navbar-list">
                    <li><NavLink to="/catalog/all">All</NavLink></li>
                    <li><NavLink to="/catalog/trees">Trees</NavLink></li>
                    <li><NavLink to="/catalog/shrubs">Shrubs</NavLink></li>
                    <li><NavLink to="/catalog/climbers">Climbers</NavLink></li>
                    <li><NavLink to="/catalog/perennials">Perennials</NavLink></li>
                    <li><NavLink to="/catalog/grasses">Grasses</NavLink></li>
                    <li><NavLink to="/catalog/herbs">Herbs</NavLink></li>
                </ul>
            </nav>
            {plants.items.length > 0
                ? <ul className="plants-list">
                    {plants.items.map(x => <PlantCard key={x._id} plant={x} />)}
                </ul>
                : <p style={{fontSize: "20px"}}>{`No ${type[0].toUpperCase() + type.slice(1)} in Database`}</p>}

        </section>
    );
}
