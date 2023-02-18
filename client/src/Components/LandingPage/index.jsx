import React from "react"
import { Link } from "react-router-dom"

export default function Landing () {
    return (
        <div>
            <h1>Welcome to DoggoPedia</h1>
            <Link to="/home">
                <button>Get In</button>
            </Link>
        </div>
    )
}