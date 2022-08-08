import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as dataService from '../../services/dataService.js'
import { DataContext } from '../../contexts/DataContext.js';

export default function Edit() {

  const { updatePlants } = useContext(DataContext)
  const [plant, setPlant] = useState({});

  const { plantId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dataService.getItemById(plantId)
      .then(result => {
        setPlant(result);
      })
  }, [plantId]);

  const onEdit = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const plant = Object.fromEntries(formData);

    //validation without controlled form
    const isEmptyField = Object.values(plant).some(x => x === '');

    if (isEmptyField) {
      return alert('All fields are required');
    }

    dataService.editItem({
      ...plant,
    }, plantId)
      .then(plant => {
        updatePlants(plant, plantId)
        navigate(`/details/${plantId}`)
      })
  }

  function onCancel() {
    navigate(`/details/${plantId}`)
  }

  return (

    <section id="edit">
      <div className="container">
        <form onSubmit={onEdit} id="edit-form">
          <h1>Plant Listing</h1>
          <p style={{color:"red"}}>Please fill in this form to edit {`${plant['plant-name']}`}.</p>

          <hr />

          <label htmlFor="name">Plant Name</label>
          <input type="text" id="name" placeholder="Enter Plant Name" name="plant-name"
            defaultValue={plant["plant-name"]}
          />

          <label htmlFor="latin">Latin Name</label>
          <input type="text" id="latin" placeholder="Enter Latin Name" name="latin-name"
            defaultValue={plant["latin-name"]}
          />

          <label htmlFor="imgUrl">Plant Image</label>
          <input type="text" id="imgUrl" placeholder="Enter Plant Image" name="imgUrl"
            defaultValue={plant.imgUrl}
          />

          <label htmlFor="type">Select Plant Type</label>
          <select type="text" id="type" name="type" defaultValue={plant.type}>
            <option className="label"></option>
            <option >Trees</option>
            <option >Shrubs</option>
            <option >Climbers</option>
            <option >Perennials</option>
            <option >Herbs</option>
          </select>

          <label htmlFor="exposure">Select Plant Exposure</label>
          <select type="text" id="exposure" name="exposure" defaultValue={plant.exposure}>
            <option className="label"></option>
            <option >Full Sun</option>
            <option >Shade</option>
            <option >Partial Sun</option>
            <option >Full Sun, Partial Sun</option>
            <option >Partial Sun, Shade</option>
          </select>

          <label htmlFor="water">Select Water Needs</label>
          <select type="text" id="water" name="water" defaultValue={plant.water}>
            <option className="label"></option>
            <option>Average</option>
            <option>Low</option>
            <option>High</option>
          </select>

          <label htmlFor="soil">Select Soil Type</label>
          <select type="text" id="soil" name="soil" defaultValue={plant.soil}>
            <option className="label"></option>
            <option>Chalk</option>
            <option>Clay</option>
            <option>Loam</option>
            <option>Sand</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" name="description"
            rows="4" cols="60" maxLength="250" placeholder="Enter Description"
            defaultValue={plant.description}
          />

          <hr />
          <input type="submit" className="register-btn" defaultValue="Edit Plant" />
          <button onClick={onCancel} className="register-btn" >Cancel</button>
        </form>
      </div>
    </section>
  );
}
