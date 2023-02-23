import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav(props) {



    return (
        <div className={styles.divPrincipal}    >
            <div className={styles.divBotones}>
                <Link to= "/postDog" ><button className={styles.button}>Create Breed</button></Link>
                <button className={styles.button} onClick={event => {props.showAllBreeds(event)}}>
                    Show all Breeds
                </button>
            </div>
            <div className={styles.secondDiv}>
                <nav className={styles.nav}>
                    <SearchBar />
                </nav>
            </div>
            
        </div>
    )
}