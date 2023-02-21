import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className={styles.divPrincipal}    >
            <div className={styles.divBotones}>
                <Link to={"/home"}><button className={styles.button}>Home</button></Link> 
                <Link to={"/favorites"}><button className={styles.button}>Favorites</button></Link>
                <Link to={"/form"}><button className={styles.button}>Form</button></Link>
            </div>
            <div className={styles.secondDiv}>
                <nav className={styles.nav}>
                    <SearchBar onSearch={props.onSearch}/>
                </nav>
            </div>
            
        </div>
    )
}