
export default function Create() {


    return (

        <section id="create-listing">
            <div className="container">
                <form id="create-form">
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
                        <option class="label"></option>
                        <option value="trees">Tree</option>
                        <option value="shrubs">Shrub</option>
                        <option value="flowers">Flower</option>
                        <option value="climbers">Climber</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="exposure">Select Plant Exposure</label>
                    <select type="text" id="exposure" name="exposure">
                        <option class="label"></option>
                        <option value="trees">Full Sun</option>
                        <option value="shrubs">Shade</option>
                        <option value="flowers">Partial Sun, Shade</option>
                    </select>

                    <label htmlFor="watering">Select Water Needs</label>
                    <select type="text" id="watering" name="watering">
                        <option value="shrubs"></option>
                        <option value="shrubs">Average</option>
                        <option value="trees">Low</option>
                        <option class="label">High</option>
                    </select>
            
                    <label htmlFor="soil">Select Soil Type</label>
                    <select type="text" id="soil" name="soil">
                        <option class="label"></option>
                        <option value="trees">Chalk</option>
                        <option value="shrubs">Clay</option>
                        <option value="flowers">Loam</option>
                        <option value="flowers">Sand</option>
                    </select>

                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" name="description" rows="4" cols="60" placeholder="Enter Description" />

                    <hr />
                    <input type="submit" className="register-btn" value="Create Listing" />
                </form>
            </div>
        </section>
    );
}
