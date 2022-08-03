import './PlantList.css'

export default function PlantList({ plant }) {

    return (
        <>
        <section className="home-card-item">
            <div className="home-card-info">
                <img src={plant.imgUrl} alt={plant['plant-name']} />
                <div className="home-card-info-desc">
                    <h4>Requirements:</h4>
                    <p>Exposure: {plant.exposure} </p>
                    <p>Water: {plant.water} </p>
                    <p>Soil: {plant.soil} </p>
                </div>
                <div className="home-card-info-text">
                    <h3>{plant['plant-name']}</h3>
                    <h4>Type {plant.type}</h4>
                    <a href={`/details/${plant._id}`} className="details-button">Details</a>
                </div>

            </div>
        </section>

        </>

    );
}