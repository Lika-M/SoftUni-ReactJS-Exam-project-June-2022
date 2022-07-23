
export default function Create() {


    return (

        <section id="create-listing">
        <div className="container">
            <form id="create-form">
                <h1>Plant Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr/>
                <p>Plant Name</p>
                <input type="text" placeholder="Enter Plant Name" name="plant-name" />

                <p>Latin Name</p>
                <input type="text" placeholder="Enter Latin Name" name="latin-name" />

                <p>Plant Exposure</p>
                <input type="number" placeholder="Enter Plant Exposure" name="exposure" />

                <p>Water Needs</p>
                <input type="number" placeholder="Enter water Needs" name="watering" />
  
                <p>Soil Type</p>
                <input type="number" placeholder="Enter soil type" name="soil" />


                <p>Plant Image</p>
                <input type="text" placeholder="Enter Plant Image" name="imgUrl" />

                <p>Description</p>
                <textarea type="text"  rows="4" cols="60"placeholder="Enter Description" name="description" />

                <hr/>
                <input type="submit" className="register-btn" value="Create Listing" />
            </form>
        </div>
    </section>
    );
}
