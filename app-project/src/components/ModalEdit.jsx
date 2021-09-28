import React from 'react'
import { Link } from 'react-router-dom'

const ModalEdit = ({closeModal}) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        className="btn-close"
                        type="button"
                        onClick={() => closeModal(false)}
                    ></button>
                </div>
                <div className="title">
                    <h1>Edited project</h1>
                </div>
                <div className="body">
                    <p>your project has been successfully edited</p>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <Link to="/">
                        <button id="otherBtn">Go to the list</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit
