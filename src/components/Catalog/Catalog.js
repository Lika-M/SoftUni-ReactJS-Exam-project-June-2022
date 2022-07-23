// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { PlantCard } from './PlantCard/PlantCard.js'
import * as dataService from '../../services/dataService';


export default function Catalog() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        dataService.getAll()
            .then(plants => {
                setPlants(plants);
            })
    }, [])


    return (
        <section id="plants">
            <h2 className="plants-title">All Listings</h2>

            {plants.length > 0
                ? <ul className="plants-list">
                    {plants.map(x => <PlantCard key={x._id} plant={x} />)}
                </ul>
                : <p>Empty Catalog</p>}
                
        </section>
    );
}
