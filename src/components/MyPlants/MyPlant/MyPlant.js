import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../../contexts/AuthContext.js';
import * as dataService from '../../../services/dataService.js';

import Vote from '../../common/Vote/Vote.js';
import './MyPlant.css';

export default function MyPlant({ plant }) {

    const [vote, setVote] = useState({
        plant: 0,
        allPlants: 0,
        myVote: false
    });

    const { user } = useContext(AuthContext);
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
    }, [])

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
                    <h3 className="my-card-name">{plant['plant-name']}</h3>
                    <Vote plant={plant} vote={vote} />
                    <Link to={`/details/${plant._id}`} className="details-button">Details</Link>
                </div>
            </div>
        </article>
    )
}