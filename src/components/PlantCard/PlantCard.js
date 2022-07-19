import {Link} from 'react-router-dom'
export function PlantCard({
    data
}){

/*
POST by Postman (http://localhost:3030/jsonstore/plants)
{     
    "plant-name": "Japanese maple",
    "latin-name": "Acer palmatum",
    "type": "tree",
    "origin": " This is a species of woody plant native to Japan, Korea and China. Many different cultivars of this maple have been selected and they are grown worldwide for their large variety of attractive forms, leaf shapes, and spectacular colors.",
    "imgUrl": "https://previews.123rf.com/images/innagiliarova/innagiliarova2003/innagiliarova200300063/142634383-fantastic-acer-palmatum-palmate-maple-maple-tree-with-bright-red-foliage-little-maple-with-juicy-lea.jpg",
    "_id": "3ef9ab6d-0853-492a-9186-9011c244338f"
} */

    return (
    <li className="plants-item">
        <div className="plant-item-img-wrapper"></div>
        <img src={data.imgUrl} alt={`${data['plant-name']}`} />
        <div className="plants-item-info">
            <h3 className="plants-item-name">
               {data['plant-name']}
                <span className="action">
                    <i className="fa-solid fa-arrow-down"></i>
                </span>
            </h3>
            <p className="plants-item-latin">{data['latin-name']}</p>
            <p className="plants-item-text">
                {data.origin}
            </p>
            <Link className="details-btn" to="details">Details</Link>
        </div>
    </li>
    );
}