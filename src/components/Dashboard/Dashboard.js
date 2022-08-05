import { NavLink } from "react-router-dom";

import { PlantCard } from "../Catalog/PlantCard/PlantCard.js"

export default function Dashboard({plants}) {
    const type = plants.currentType ? plants.currentType : "All";
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
                :  <p style={{fontSize: "20px"}}>{`No ${type[0].toUpperCase() + type.slice(1)} in Database`}</p>}
        </section>
    )
}