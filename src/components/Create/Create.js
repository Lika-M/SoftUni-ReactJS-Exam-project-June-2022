import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as dataService from '../../services/dataService.js'
import { DataContext } from '../../contexts/DataContext.js';


export default function Create() {
    // const { user } = useContext(AuthContext);
    const {addPlant} = useContext(DataContext);
    const navigate = useNavigate();

    const onCreate = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);
        const plant = Object.fromEntries(formData);

        //validation without controlled form
        const isEmptyField = Object.values(plant).some(x => x === '');

        if (isEmptyField) {
            return alert('All fields are required');
        }

        dataService.createItem({
            ...plant,
            likes: []
        })
            .then(result => {
                // console.log(result);
                addPlant(result);
                navigate('/')
            })
    }


    return (

        <section id="create-listing">
            <div className="container">
                <form onSubmit={onCreate} id="create-form">
                    <h1>Plant Listing</h1>
                    <p>Please fill in this form to create an listing.</p>

                    <hr />

                    <label htmlFor="name">Plant Name</label>
                    <input type="text" id="name" placeholder="Enter Plant Name" name="plant-name" />

                    <label htmlFor="latin">Latin Name</label>
                    <input type="text" id="latin" placeholder="Enter Latin Name" name="latin-name" />

                    <label htmlFor="imgUrl">Plant Image</label>
                    <input type="text" id="imgUrl" placeholder="Enter Plant Image" name="imgUrl" />

                    <label htmlFor="type">Select Plant Type</label>
                    <select type="text" id="type" name="type">
                        <option className="label"></option>
                        <option >Trees</option>
                        <option >Shrubs</option>
                        <option >Climbers</option>
                        <option >Perennials</option>
                        <option >Herbs</option>
                    </select>

                    <label htmlFor="exposure">Select Plant Exposure</label>
                    <select type="text" id="exposure" name="exposure">
                        <option className="label"></option>
                        <option >Full Sun</option>
                        <option >Shade</option>
                        <option >Partial Sun</option>
                        <option >Full Sun, Partial Sun</option>
                        <option >Partial Sun, Shade</option>
                    </select>

                    <label htmlFor="water">Select Water Needs</label>
                    <select type="text" id="water" name="water" >
                        <option className="label"></option>
                        <option>Average</option>
                        <option>Low</option>
                        <option>High</option>
                    </select>

                    <label htmlFor="soil">Select Soil Type</label>
                    <select type="text" id="soil" name="soil" >
                        <option className="label"></option>
                        <option>Chalk</option>
                        <option>Clay</option>
                        <option>Loam</option>
                        <option>Sand</option>
                    </select>

                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" name="description"
                        rows="4" cols="60" maxLength="250" placeholder="Enter Description" />

                    <hr />
                    <input type="submit" className="register-btn" defaultValue="Create Listing" />
                </form>
            </div>
        </section>
    );
}
