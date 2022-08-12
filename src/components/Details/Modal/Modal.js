import './Modal.css'

export default function Modal({
    name,
    handleDeleteFalse,
    handleDeleteTrue
}) {
   
    return (
        <section id="delete-modal" className="modal">
            <div className="container">
                <h1> Do you really want to delete <span style={{ color: 'orange' }}> {name} </span>?</h1>
                <p>This process cannot be undone.</p>

                <div className="clear-buttons">
                    <button onClick={handleDeleteFalse} type="button" className="cancel-btn">Cancel</button>
                    <button onClick={handleDeleteTrue} type="button" className="delete-btn">Delete</button>
                </div>
            </div>
        </section>

    )
}