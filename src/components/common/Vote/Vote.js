export default function Vote({vote}) {

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