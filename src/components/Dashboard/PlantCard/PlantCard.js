import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../../contexts/AuthContext.js';
import * as dataService from '../../../services/dataService.js';

import Vote from '../../common/Vote/Vote.js';
import './PlantCard.css';

export function PlantCard({plant}) {
    const [vote, setVote] = useState({
        plant: 0,
        allPlants: 0,
        myVote: false
    });

    const {user} = useContext(AuthContext);
    const plantId = plant._id;

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
                <Vote plant={plant} vote={vote}/>
                <p className="plants-item-text">
                    {plant.description}
                </p>
                <Link to={`/details/${plant._id}`} className="details-btn">Details</Link>
            </div>
        </li>
    );
}