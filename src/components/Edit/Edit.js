import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as dataService from '../../services/dataService.js'
import { DataContext } from '../../contexts/DataContext.js';

export default function Edit() {
  const [plant, setPlant] = useState({});
  const [errEdit, setErrEdit] = useState({});

  const { updatePlants } = useContext(DataContext)
  const { plantId } = useParams();

  const navigate = useNavigate();
  let errMessage = '';

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

    const isEmptyField = Object.values(plant).some(x => x === '');

    if (isEmptyField) {
      errMessage = 'All fields are required!';
      setErrEdit(state => ({
        ...state,
        isEmptyField: errMessage
      }));
      return;
    }

    dataService.editItem({
      ...plant,
    }, plantId)
      .then(plant => {
        updatePlants(plant, plantId)
        navigate(`/details/${plantId}`)
      })
  }

  function onChange(ev) {
    setPlant(state => ({
      ...state,
      [ev.target.name]: ev.target.value
    }))
  }

  function validateMessage(ev) {
    if (ev.target.value.length > 20) {
      return errMessage = 'Name must be no longer than 20 symbols.';
    } else if (ev.target.value.length < 3) {
      return errMessage = 'Name must be at least 3 symbols.';
    }
  }

  function validateName(ev) {
    const message = validateMessage(ev);
    setErrEdit(state => ({
      ...state,
      'plant-name': message
    }));
  }

  function validateLatinName(ev) {
    const message = validateMessage(ev);
    setErrEdit(state => ({
      ...state,
      'latin-name': message
    }));
  }

  function validateUrl(ev) {
    if (ev.target.value.length < 10) {
      errMessage = 'Enter image URL.';
    }
    setErrEdit(state => ({
      ...state,
      imgUrl: errMessage
    }));
  }

  function validateDescription(ev) {
    if (ev.target.value.length === 0) {
      errMessage = 'Enter description.';
    } else if (ev.target.value > 200) {
      errMessage = 'Description must be no longer than 250 symbols.';
    }
    setErrEdit(state => ({
      ...state,
      description: errMessage
    }));
  }
  function onCancel() {
    navigate(`/details/${plantId}`);
  }

  return (
    <section id="edit">
      <div className="container">
        <form onSubmit={onEdit} id="edit-form">
          <h1>Plant Listing</h1>
          <p>
            Please fill in this form to edit 
            <p style={{ color: "red", fontSize: "20px"}}>{`${plant['plant-name']}`}</p>
            </p>

          <hr />

          <label htmlFor="name">Plant Name</label>
          <input type="text" id="name" placeholder="Enter Plant Name" name="plant-name"
            value={plant["plant-name"]}
            onChange={onChange}
            onBlur={validateName}
          />
          {errEdit['plant-name']
            ? <p style={{ color: 'red' }}>{errEdit["plant-name"]}</p>
            : null}

          <label htmlFor="latin">Latin Name</label>
          <input type="text" id="latin" placeholder="Enter Latin Name" name="latin-name"
            value={plant["latin-name"]}
            onChange={onChange}
            onBlur={validateLatinName}
          />
          {errEdit['latin-name']
            ? <p style={{ color: 'red' }}>{errEdit["latin-name"]}</p>
            : null}

          <label htmlFor="imgUrl">Plant Image</label>
          <input type="text" id="imgUrl" placeholder="Enter Plant Image" name="imgUrl"
            value={plant.imgUrl}
            onChange={onChange}
            onBlur={validateUrl}
          />
          {errEdit.imgUrl
            ? <p style={{ color: 'red' }}>{errEdit.imgUrl}</p>
            : null}

          <label htmlFor="type">Select Plant Type</label>
          <select type="text" id="type" name="type"
            value={plant.type}
            onChange={onChange}
          >
            <option value={""} className="label"onChange={onChange}></option>
            <option value={"Trees"} onChange={onChange}>Trees</option>
            <option value={"shrubs"} onChange={onChange}>Shrubs</option>
            <option value={"Shrubs"} onChange={onChange}>Climbers</option>
            <option value={"Perennials"} onChange={onChange}>Perennials</option>
            <option value={"Herbs"} onChange={onChange}>Herbs</option>
          </select>

          <label htmlFor="exposure">Select Plant Exposure</label>
          <select type="text" id="exposure" name="exposure"
            value={plant.exposure}
            onChange={onChange}
          >
            <option value={""} className="label" onChange={onChange}></option>
            <option value={"Full Sun"} onChange={onChange}>Full Sun</option>
            <option value={"Shade"} onChange={onChange}>Shade</option>
            <option value={"Partial Sun"} onChange={onChange}>Partial Sun</option>
            <option value={"Full Sun, Partial Sun"} onChange={onChange}>Full Sun, Partial Sun</option>
            <option value={"Partial Sun, Shade"} onChange={onChange}>Partial Sun, Shade</option>
          </select>

          <label htmlFor="water">Select Water Needs</label>
          <select type="text" id="water" name="water"
            value={plant.water}
            onChange={onChange}
          >
            <option value={""} className="label" onChange={onChange}></option>
            <option value={"Average"} onChange={onChange}>Average</option>
            <option value={"Low"} onChange={onChange}>Low</option>
            <option value={"High"} onChange={onChange}>High</option>
          </select>

          <label htmlFor="soil">Select Soil Type</label>
          <select type="text" id="soil" name="soil"
            value={plant.soil}
            onChange={onChange}
          >
            <option value={""} className="label"onChange={onChange}></option>
            <option value={"Chalk"} onChange={onChange}>Chalk</option>
            <option value={"Clay"} onChange={onChange}>Clay</option>
            <option value={"Loam"} onChange={onChange}>Loam</option>
            <option value={"Sand"} onChange={onChange}>Sand</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" name="description"
            rows="4" cols="60" maxLength="250" placeholder="Enter Description"
            value={plant.description}
            onChange={onChange}
            onBlur={validateDescription}
          />
          {errEdit.description
            ? <p style={{ color: 'red' }}>{errEdit.description}</p>
            : null}
          <hr />
          {errEdit.isEmptyField
            ? <p style={{ color: 'red' }}>{errEdit.isEmptyField}</p>
            : null}
          <input type="submit" className="register-btn" value="Edit Plant" />
          <button onClick={onCancel} className="register-btn" >Cancel</button>
        </form>
      </div>
    </section>
  )
}
