import React from "react"
import styles from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card({
    id, 
    name, 
    image, 
    temperament,
    min_weight, 
    max_weight
    }) {
    return (
        <div className={styles.divPrincipal}>
            <img className={styles.img} src={image} alt="" />
            <Link to= {`/detail/${id}`}><h2 className={styles.name}>{name}</h2></Link>
            <div className={styles.divUnder}>
                <h2>{temperament}</h2>
                <h2 className={styles.weight}>Peso: {min_weight} - {max_weight}</h2>
            </div>
        </div>
    )
}

