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
  const [vote, setVote] = useState({
    plant: 0,
    allPlants: 0,
    myVote: false
  });
  console.log('vote: ', vote)

  const [modal, setModal] = useState({ show: false });

  const { plantId } = useParams();
  const { user } = useContext(AuthContext);
  const { removePlant } = useContext(DataContext)

  useEffect(() => {
    dataService.getItemById(plantId)
      .then(result => {
        setPlant(result);
      });
  }, [plantId]);

  useEffect(() => {
    dataService.getVoteByPlantId(plantId)
      .then(res => {
        setVote(state => {
          return {
            ...state,
            plant: res
          }
        })
      })
  }, [plantId])

  useEffect(() => {
    dataService.getMyVoteByPlantId(plantId, user._id)
      .then(res => {
        if (res > 0) {
          setVote(state => {
            return {
              ...state,
              myVote: true
            }
          })
        }
      })
  }, [plantId, user._id]);

  useEffect(() => {
    dataService.getAllVotes()
      .then(res => {
        setVote(state => {
          return {
            ...state,
            allPlants: res.length
          }
        })
      });
  }, []);
  let stars = [];
  let starsGrey = [];

  if (vote.allPlants !== 0) {
    const rating = ((Number(vote.plant) / Number(vote.allPlants)) * 5).toFixed(0);
    stars = (
      [...Array.from({ length: rating }, (v, i) => i)].map((x, i) => (<span key={i}>☆</span>)) || 0
    );
    starsGrey = (
      [...Array.from({ length: 5 - rating }, (v, j) => j)].map((x, j) => (<span key={j} className="grey" style={{ color: "lightGrey" }}>☆</span>))
    );
  } else {
    starsGrey = (
      [...Array.from({ length: 5 }, (v, k) => k)].map((x, k) => (<span key={k} className="grey" style={{ color: "lightGrey" }}>☆</span>))
    );
  }

  const isOwner = user._id === plant._ownerId;
  let buttons = null;
  if (user._id !== undefined) {

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
        </div>)
    } else if (!isOwner && vote.myVote === false) {
      buttons = (
        <button onClick={onVote} className="details-btn"><i className="fa-solid fa-angles-right"></i>
          <span>VOTE</span>
        </button>)
    }
  }

  function onDelete() {
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
          navigate('/my-plants');
        });
    }
  };

  function onClose() {
    if (isOwner) {
      navigate('/my-plants');
    } else {
      navigate(`/catalog`);
    }
  };


  function onVote() {
    dataService.voteForItem({ plantId })
      .then(res => {
        setVote(state => {
          return {
            ...state,
            plant: state.plant + 1,
            allPlants: state.allPlants +1,
            myVote: true
          }
        });
      });

  }

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
            <div className="left-wrap">
              <button className="details-btn-close" onClick={onClose}>
                <i style={{ fontSize: "20px" }} className="fa-solid fa-xmark"></i>
              </button>
              <h4 className="name" > {plant['plant-name']}</h4>
              <h6 className="latin"> {plant['latin-name']}</h6>
            </div>
            <div className="plant-card-info-text">
              <div className="left">
                <p className="type"><span>Plant Type:</span> {plant.type}</p>
                <p className="exposure"><span>Exposure:</span> {plant.exposure}</p>
                <p className="water"><span>Water Needs:</span> {plant.water}</p>
                <p className="soil"><span>Soil Type:</span> {plant.soil}</p>
              </div>
              <div className="rating">
                <h3>Rating: {`(${vote.plant} / ${vote.allPlants})`} </h3>
                {stars}
                {starsGrey}
              </div >
              <div className="right">
                <div className="description">
                  <span>Description: </span>
                  {plant.description}
                </div>
              </div>
            </div >
            {buttons}
          </div >
          {modal.show &&
            <Modal
              name={plant['plant-name']}
              handleDeleteTrue={handleDeleteTrue}
              handleDeleteFalse={handleDeleteFalse}
            />}
        </article >
      </div >
    </section >
  );
}