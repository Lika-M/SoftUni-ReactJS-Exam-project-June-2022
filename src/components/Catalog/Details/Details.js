import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as dataService from '../../../services/dataService.js';

import './Details.css';


export default function Details() {
  const navigate = useNavigate();
  const [plant, setPlant] = useState({});
  const { plantId } = useParams();


  useEffect(() => {
    dataService.getItemById(plantId)
      .then(result => {
        setPlant(result);
      });
  }, []);

  function onClose() {
    navigate(`/catalog/all`)
  }
  

  return (
    <div id="card-details">
      <article className="plant-card">
        <div className="plant-card-background">
          <div className="card-background-wrapper">
            <img
              src={plant.imgUrl}
              alt="plant-picture" />
          </div>
        </div>

        <div className="plant-card-info">
          <button className="plant-card-info-close" onClick={onClose}>
            <i style={{ fontSize: "20px" }} class="fa-solid fa-xmark"></i>
          </button>
          <div className="plant-card-info-text">
            <div className="left">
              <div>
                <h4 className="name" > {plant['plant-name']}</h4>
                <h6 className="latin"> {plant['latin-name']}</h6>
                <div className="rating">
                  <span>☆</span>
                  <span>☆</span>

                </div>
              </div>
              <p className="type"><span>Plant Type:</span> {plant.type}</p>
              <p className="exposure"><span>Exposure:</span> {plant.exposure}</p>
              <p className="water"><span>Water Needs:</span> {plant.water}</p>
              <p className="soil"><span>Soil Type:</span> {plant.soil}</p>
            </div>
            <div className="right">
              <p className="description">
                <span>Description: </span>
                {plant.description}
              </p>
            </div>
          </div>


          <Link to={`/edit/${plantId}`} className="btn btn-with-icon"><i class="fa-solid fa-angles-right"></i><span>EDIT</span></Link>
          <Link to="/delete" className="btn btn-with-icon"><i class="fa-solid fa-angles-right"></i><span>DELETE</span></Link>
          <Link to="#" className="btn btn-with-icon vote"><i class="fa-solid fa-angles-right"></i><span>VOTE</span></Link>
        </div>

      </article>
    </div>
  );
}