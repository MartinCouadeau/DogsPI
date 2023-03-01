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
            <Link to= {`/detail/${id}`} >
            <img 
            className={styles.img} 
            width= "400px"
            height= "200px"
            src={image} alt="" />
           <h3 className={styles.name}>{name}</h3>

            
                <div className= {styles.cardBody}>              
                    <div className={styles.temperaments}>
                        <b>Temperament</b>
                        <p className={styles.temp}>{temperament}</p>
                    </div>
                </div>
            
            




            <div className={styles.divUnder}>
                <h4 className={styles.weight}>Weight: {min_weight} - {max_weight} KG</h4>
                <h4  className={styles.height}>Height: {min_height} - {max_height} CM</h4>
            </div>
            </Link>
        </div>
    )
}

   // image?.match(/.(jpeg|jpg|gif|png)$/) || !image) ? image : "./dogDefault"
