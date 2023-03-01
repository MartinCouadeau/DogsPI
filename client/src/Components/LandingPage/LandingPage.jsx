import React from "react"
import { Link } from "react-router-dom"
import styles from "./LandingPage.module.css"

export default function LandingPage () {
    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.title}>Welcome to DoggoPedia</h1>
            <Link to="/home">
                <button className={styles.button}>Get In</button>
            </Link>
        </div>
    )
}