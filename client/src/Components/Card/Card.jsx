import React from "react"
import styles from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card({
    id, 
    name, 
    image, 
    temperament,
    min_weight, 
    max_weight,
    min_height,
    max_height
    }) {

    
    

    return (
        <div className={styles.divPrincipal}>
            <img 
            className={styles.img} 
            width= "400px" 
            height= "200px"
            src={image} alt="" />
            <Link to= {`/detail/${id}`}><h3 className={styles.name}>{name}</h3></Link>
            <div className={styles.divUnder}>
                <h4 className={styles.weight}>Weight: {min_weight} - {max_weight} KG</h4>
                <h4  className={styles.height}>Height: {min_height} - {max_height} CM</h4>
            </div>
        </div>
    )
}

   // image?.match(/.(jpeg|jpg|gif|png)$/) || !image) ? image : "./dogDefault"
