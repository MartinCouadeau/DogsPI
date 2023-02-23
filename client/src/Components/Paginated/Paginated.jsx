import React from "react";
import styles from './Paginated.module.css'

export default function Paginated ({breedsPerPage, allBreeds, paginated}) {
    const pageNum = []

    for (let i = 1; i <= Math.ceil(allBreeds/breedsPerPage); i++) {
        pageNum.push(i)
    }


    return (
        <div>
            <ul className={styles.paginated}>
                {pageNum?.map(num => {
                    return (
                        <div className={styles.div}>
                            <a onClick={() => paginated(num)}>{num}</a>
                        </div>
                        
                )})}
            </ul>
        </div>
    )
}