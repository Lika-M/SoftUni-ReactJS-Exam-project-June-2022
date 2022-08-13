import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";

import { DataContext } from "../../contexts/DataContext.js";

import { PlantCard } from "./PlantCard/PlantCard.js"

export default function Dashboard({plantTypes}) {
    
    let { plants } = useContext(DataContext);
    let { type } = useParams();

    if (type) {
        plants = { ...plantTypes };
    } else {
        type = 'Plants';
    }

    if(type === 'all'){
        type = 'Plants';
    }

    return (
        <section id="plants">
            <nav className="plants-navbar">
                <ul className="plants-navbar-list">
                    <li><NavLink className="latest" to="/catalog/all">Latest Plants</NavLink></li>
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
                : <p style={{ fontSize: "30px", color: "red" }}>
                    {`No ${type[0].toUpperCase() + type.slice(1)} in Database`}
                </p>}
        </section>
    );
}