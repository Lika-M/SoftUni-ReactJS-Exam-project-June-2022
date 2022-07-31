import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as dataService from '../../../services/dataService.js'
import { AuthContext } from '../../../contexts/AuthContext.js';

export default function Create() {
    const { user } = useContext(AuthContext);
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
          navigate('/catalog/all')
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
                        <option defaultValue="trees">Trees</option>
                        <option defaultValue="shrubs">Shrubs</option>
                        <option defaultValue="climbers">Climbers</option>
                        <option defaultValue="flowers">Perennials</option>
                        <option defaultValue="other">Herbs</option>
                    </select>

                    <label htmlFor="exposure">Select Plant Exposure</label>
                    <select type="text" id="exposure" name="exposure">
                        <option className="label"></option>
                        <option defaultValue="trees">Full Sun</option>
                        <option defaultValue="shrubs">Shade</option>
                        <option defaultValue="shrubs">Partial Sun</option>
                        <option defaultValue="flowers">Full Sun, Partial Sun</option>
                        <option defaultValue="flowers">Partial Sun, Shade</option>
                    </select>

                    <label htmlFor="watering">Select Water Needs</label>
                    <select type="text" id="watering" name="watering">
                        <option defaultValue="shrubs"></option>
                        <option defaultValue="shrubs">Average</option>
                        <option defaultValue="trees">Low</option>
                        <option className="label">High</option>
                    </select>
            
                    <label htmlFor="soil">Select Soil Type</label>
                    <select type="text" id="soil" name="soil">
                        <option className="label"></option>
                        <option defaultValue="trees">Chalk</option>
                        <option defaultValue="shrubs">Clay</option>
                        <option defaultValue="flowers">Loam</option>
                        <option defaultValue="flowers">Sand</option>
                    </select>

                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" name="description"
                     rows="4" cols="60" maxLength="270" placeholder="Enter Description" />

                    <hr />
                    <input type="submit" className="register-btn" defaultValue="Create Listing" />
                </form>
            </div>
        </section>
    );
}
