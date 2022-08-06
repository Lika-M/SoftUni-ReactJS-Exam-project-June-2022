import {Link} from 'react-router-dom';

import './PlantCard.css';

export function PlantCard({
    plant
}){

    return (
        
    <li className="plants-item">
        <img src={plant.imgUrl} alt={`${plant['plant-name']}`} />
        <div className="plants-item-info">
            <h3 className="plants-item-name">
               {plant['plant-name']}
                <span className="action">
                    <i className="fa-solid fa-arrow-down"></i>
                </span>
            </h3>
            <p className="plants-item-latin">{plant['latin-name']}</p>
            <p className="plants-item-text">
                {plant.description}
            </p>
            <Link to={`/details/${plant._id}`} className="details-btn">Details</Link>
        </div>
    </li>
    );
}