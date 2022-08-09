import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as dataService from '../../services/dataService.js'
import { DataContext } from '../../contexts/DataContext.js';


export default function Create() {
    const [err, setErr] = useState({});
    const [input, setInput] = useState({});
    
    const { addPlant } = useContext(DataContext);

    const navigate = useNavigate();
    let errMessage = '';

    const onCreate = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);
        const plant = Object.fromEntries(formData);

        const isEmptyField = Object.values(plant).some(x => x === '');

        if (isEmptyField) {
            errMessage = 'All fields are required!';
            setErr(state => ({
                ...state,
                isEmptyField: errMessage
            }));
            return;
        }

        dataService.createItem({
            ...plant,
        }).then(result => {
            addPlant(result);
            navigate('/my-plants');
        })
    };

    function onChange(ev) {
        setInput(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    function validateMessage(ev) {
        if (ev.target.value.length > 20) {
            return errMessage = 'Name must be no longer than 20 symbols.';
        } else if (ev.target.value.length < 3) {
            return errMessage = 'Name must be at least 3 symbols.';
        }
    }

    function validateName(ev) {
        const message = validateMessage(ev);
        setErr(state => ({
            ...state,
            ['plant-name']: message
        }));
    }

    function validateLatinName(ev) {
        const message = validateMessage(ev);
        setErr(state => ({
            ...state,
            ['latin-name']: message
        }));
    }

    function validateUrl(ev) {
        if (ev.target.value.length < 10) {
            errMessage = 'Enter image URL.';
        }
        setErr(state => ({
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
        setErr(state => ({
            ...state,
            description: errMessage
        }));
    }


    return (

        <section id="create">
            <div className="container">
                <form onSubmit={onCreate} id="create-form">
                    <h1>Plant Listing</h1>
                    <p>Please fill in this form to create your own Plant List.</p>

                    <hr />

                    <label htmlFor="name">Plant Name</label>
                    <input type="text" id="name" placeholder="Enter Plant Name"
                        name="plant-name"
                        value={input.name}
                        onChange={onChange}
                        onBlur={validateName}
                    />
                    {err['plant-name']
                        ? <p style={{ color: 'red' }}>{err["plant-name"]}</p>
                        : null}

                    <label htmlFor="latin">Latin Name</label>
                    <input type="text" id="latin" placeholder="Enter Latin Name"
                        name="latin-name"
                        value={input.latin}
                        onChange={onChange}
                        onBlur={validateLatinName}
                    />
                    {err['latin-name']
                        ? <p style={{ color: 'red' }}>{err["latin-name"]}</p>
                        : null}

                    <label htmlFor="imgUrl">Plant Image</label>
                    <input type="text" id="imgUrl" placeholder="Enter Plant Image"
                        name="imgUrl"
                        value={input.imgUrl}
                        onChange={onChange}
                        onBlur={validateUrl}
                    />
                    {err.imgUrl
                        ? <p style={{ color: 'red' }}>{err.imgUrl}</p>
                        : null}

                    <label htmlFor="type">Select Plant Type</label>
                    <select type="text" id="type" name="type"
                        value={input.type}
                        onChange={onChange}
                    >
                        <option value={""} className="label"></option>
                        <option value={"Trees"} >Trees</option>
                        <option value={"shrubs"}>Shrubs</option>
                        <option value={"Shrubs"}>Climbers</option>
                        <option value={"Perennials"}>Perennials</option>
                        <option value={"Herbs"}>Herbs</option>
                    </select>

                    <label htmlFor="exposure">Select Plant Exposure</label>
                    <select type="text" id="exposure" name="exposure"
                        value={input.exposure}
                        onChange={onChange}
                    >
                        <option value={""} className="label"></option>
                        <option value={"Full Sun"} >Full Sun</option>
                        <option value={"Shade"} >Shade</option>
                        <option value={"Partial Sun"} >Partial Sun</option>
                        <option value={"Full Sun, Partial Sun"} >Full Sun, Partial Sun</option>
                        <option value={"Partial Sun, Shade"} >Partial Sun, Shade</option>
                    </select>

                    <label htmlFor="water">Select Water Needs</label>
                    <select type="text" id="water" name="water"
                        value={input.water}
                        onChange={onChange}
                    >
                        <option value={""} className="label"></option>
                        <option value={"Average"} >Average</option>
                        <option value={"Low"} >Low</option>
                        <option value={"High"} >High</option>
                    </select>

                    <label htmlFor="soil">Select Soil Type</label>
                    <select type="text" id="soil" name="soil"
                        value={input.soil}
                        onChange={onChange}
                    >
                        <option value={""} className="label"></option>
                        <option value={"Chalk"} >Chalk</option>
                        <option value={"Clay"} >Clay</option>
                        <option value={"Loam"} >Loam</option>
                        <option value={"Sand"} >Sand</option>
                    </select>

                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" name="description"
                        rows="4" cols="60" maxLength="250" placeholder="Enter Description"
                        value={input.description}
                        onChange={onChange}
                        onBlur={validateDescription}
                    />
                    {err.description
                        ? <p style={{ color: 'red' }}>{err.description}</p>
                        : null}

                    <hr />
                    {err.isEmptyField
                        ? <p style={{ color: 'red' }}>{err.isEmptyField}</p>
                        : null}
                    <input type="submit" className="register-btn"
                        value="Create Listing"
                    />
                </form>
            </div>
        </section>
    );
}
