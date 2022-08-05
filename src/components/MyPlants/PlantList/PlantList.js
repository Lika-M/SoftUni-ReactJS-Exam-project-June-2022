import { Link } from 'react-router-dom';
import './PlantList.css';

export default function PlantList({ plant }) {

    return (
            <article className="my-card-item">
                <div className="my-card-info">
                    <img src={plant.imgUrl} alt={plant['plant-name']} />
                    <div className="my-card-info-desc">
                        <h4>Requirements:</h4>
                        <p>Exposure: {plant.exposure} </p>
                        <p>Water: {plant.water} </p>
                        <p>Soil: {plant.soil} </p>
                    </div>
                    <div className="my-card-info-text">
                        <h3>{plant['plant-name']}</h3>
                        <h4>Type: {plant.type}</h4>
                        <Link to={`/details/${plant._id}`} className="details-button">Details</Link>
                    </div>
                </div>

            </article>
           
    );
}