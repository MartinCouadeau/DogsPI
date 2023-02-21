import React from "react"
import { Link } from 'react-router-dom';


export default function Card({name, image, temperament, weight}) {
    return (
        <div className={styles.divPrincipal}>
            <img className={styles.charImage} src={image} alt="" />
            <Link to= {`/detail/${props.id}`}><h2 className={styles.charName}>{name}</h2></Link>
            <div className={styles.divUnder}>
                <h2 className={styles.charGender}>{temperament}</h2>
                <h2 className={styles.charSpecie}>{weight}</h2>
            </div>
        </div>
    )
}