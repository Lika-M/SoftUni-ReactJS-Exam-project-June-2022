// import { useState, useEffect, useContext } from 'react';

// import { AuthContext } from '../../../contexts/AuthContext.js';
// import * as dataService from '../../../services/dataService.js';

export default function Vote({
    plant, vote
}) {

    // const [vote, setVote] = useState({
    //     plant: 0,
    //     allPlants: 0,
    //     myVote: false
    // });

    // const {user} = useContext(AuthContext);
    // const plantId = plant._id;

    // useEffect(() => {
    //     dataService.getVoteByPlantId(plantId)
    //         .then(res => {
    //             setVote(state => {
    //                 return {
    //                     ...state,
    //                     plant: res
    //                 }
    //             })
    //         })
    // }, [plantId])

    // useEffect(() => {
    //     dataService.getMyVoteByPlantId(plantId, user._id)
    //         .then(res => {
    //             if (res > 0) {
    //                 setVote(state => {
    //                     return {
    //                         ...state,
    //                         myVote: true
    //                     }
    //                 })
    //             }
    //         })
    // }, [plantId, user._id]);

    // useEffect(() => {
    //     dataService.getAllVotes()
    //         .then(res => {
    //             setVote(state => {
    //                 return {
    //                     ...state,
    //                     allPlants: res.length
    //                 }
    //             })
    //         });
    // }, []);

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
    
    return (
        <div className="rating">
            <h3>Rating: {`(${vote.plant} / ${vote.allPlants})`} </h3>
            {stars}
            {starsGrey}
        </div>
    );
}