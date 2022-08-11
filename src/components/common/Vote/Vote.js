import { useVote } from "../../../hooks/useVote/useVote.js";
export default function Vote({
    plant, user
}) {

    const vote = useVote(plant, user)[0];
    const stars = useVote(plant, user)[2];
    const starsGrey = useVote(plant, user)[3];
    
    return (
        <div className="rating">
            <h3>Rating: {`(${vote.plant} / ${vote.allPlants})`} </h3>
            {stars}
            {starsGrey}
        </div>
    );
}