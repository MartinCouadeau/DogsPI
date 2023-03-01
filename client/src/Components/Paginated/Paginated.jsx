import React from "react";
import styles from './Paginated.module.css'

export default function Paginated ({current, breedsPerPage, allBreeds, paginated, handleNext, handlePrevious}) {


    const pageNum = []


    for (let i = 1; i <= Math.ceil(allBreeds/breedsPerPage); i++) {
        pageNum.push(i)
    }


    return (
        <div >
            {pageNum.length > 1 ? <button onClick={(event) => handlePrevious(event)} className={styles.btn}>{"<"}</button> : <p></p>}
            <ul className={styles.paginated}>
                {pageNum?.map(num => {
                    if (num === current) {
                        return (
                            <div className={styles.current}>
                                <a onClick={() => paginated(num)}>{num}</a>
                            </div>
                        )
                    }
                    return (
                        <div className={styles.div}>
                            <a onClick={() => paginated(num)}>{num}</a>
                        </div>
                )})}
            </ul>
            {pageNum.length > 1 ? <button onClick={(event) => handleNext(event)} className={styles.btn2}>{">"}</button> : <p></p>}
        </div>
    )
}