import styles from './SearchBar.module.css'
import {useState} from 'react';

export default function SearchBar(props) {

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
      
   }


   return (
      <div className={styles.divPrincipal}>
         <input className={styles.input} onChange={handleChange} type='search' />
         <button className={styles.button} onClick={() => {
               props.onSearch(id)
               const inp = document.querySelector("input") // se toma el input de linea 16
               inp.value = "" // se elimina el numero que se acaba de agregar de la search bar para evitar que el usuario tenga que borrarlo
            }}>Agregar</button>
      </div>
   ); 
}
