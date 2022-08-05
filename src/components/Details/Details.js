import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext.js';
import { DataContext } from '../../contexts/DataContext.js';
import * as dataService from '../../services/dataService.js';

import Modal from './Modal/Modal.js';
import './Details.css';

export default function Details() {
  const navigate = useNavigate();
  const [plant, setPlant] = useState({});

  const { plantId } = useParams();

  const { user } = useContext(AuthContext);
  const { removePlant } = useContext(DataContext)
  const [modal, setModal] = useState({ show: false });

  useEffect(() => {
    dataService.getItemById(plantId)
      .then(result => {
        setPlant(result);
      });
  }, [plantId]);

  const isOwner = user._id === plant._ownerId;
  let buttons = null;

  if (user._id) {
    if (isOwner) {
      buttons = (
        <div >
          <Link to={`/edit/${plantId}`}>
            <button className="details-btn">
              <i className="fa-solid fa-angles-right"></i><span>EDIT</span>
            </button>
          </Link>
          <button onClick={onDelete} className=" delete details-btn">
            <i className="fa-solid fa-angles-right"></i><span>DELETE</span>
          </button>
        </div>
      )
    } else {
      buttons = (
          <Link to="#">
            <button className="details-btn"><i className="fa-solid fa-angles-right">
            </i><span>VOTE</span>
            </button>
          </Link>
      )
    }
  };

  function onDelete(ev) {
    setModal({ show: true });
  };

  function handleDeleteFalse() {
    setModal({ show: false });
  };

  function handleDeleteTrue() {
    if (modal.show) {
      dataService.deleteItemById(plantId)
        .then(result => {
          removePlant(plantId);
          navigate('/catalog/all');
        });
    }
  };

  function onClose() {
    if(isOwner){
      navigate('/my-plants');
    } else {
      navigate(`/catalog/all`);
    }
  };


  return (
    <section id="details">
      {modal.show && <form className="modal-backdrop" onClick={handleDeleteFalse}>
        <button className="btn-close" onClick={() => { navigate(`/details/${plantId}`) }}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </form>}

      <div id="card-details">
        <article className="plant-card">
          <div className="plant-card-background">
            <div className="card-background-wrapper">
              <img
                src={plant.imgUrl}
                alt={`${plant['plant-name']}`} />
            </div>
          </div>

          <div className="plant-card-info">
            <button className="details-btn-close" onClick={onClose}>
              <i style={{ fontSize: "20px" }} className="fa-solid fa-xmark"></i>
            </button>
            <div className="plant-card-info-text">
              <div className="left">
                <div className="left-wrap">
                  <h4 className="name" > {plant['plant-name']}</h4>
                  <h6 className="latin"> {plant['latin-name']}</h6>

                </div>
                <p className="type"><span>Plant Type:</span> {plant.type}</p>
                <p className="exposure"><span>Exposure:</span> {plant.exposure}</p>
                <p className="water"><span>Water Needs:</span> {plant.water}</p>
                <p className="soil"><span>Soil Type:</span> {plant.soil}</p>
              </div>
              <div className="right">
                <div className="description">
                <div className="rating">
                  <h3>Rating: </h3>
                  <span>☆</span>
                  <span>☆</span>
                </div>
                  <span>Description: </span>
                  {plant.description}
                </div>
              </div>
            </div>

            {buttons}

          </div>

          {modal.show &&
            <Modal
              name={plant['plant-name']}
              handleDeleteTrue={handleDeleteTrue}
              handleDeleteFalse={handleDeleteFalse}
            />
          }
        </article>
      </div>
    </section>
  );
}