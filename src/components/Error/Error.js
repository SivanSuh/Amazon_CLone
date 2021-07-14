import React from 'react'
import "./Error.css";
import { Link } from "react-router-dom"
function Error() {
    return (
        <div className="error">
            <h1 style={{color:"red" , fontSize:"40px"}}>404</h1>
            <h2>Error Pages</h2>
            <Link to="/">
                <button className="button">Back To Home</button>
            </Link>
        </div>
    )
}

export default Error
