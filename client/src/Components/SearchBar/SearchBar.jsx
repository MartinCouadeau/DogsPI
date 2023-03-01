import styles from './SearchBar.module.css'
import {useState} from 'react';
import { getNameBreeds } from '../../Redux/Actions/getNameBreeds';
import { useDispatch } from 'react-redux';

export default function SearchBar(props) {

   const dispatch = useDispatch()
   const [name, setName] = useState("")

   const handleChange = (event) => {
      setName(event.target.value)
      
   }

   function handleClick () {
      dispatch(getNameBreeds(name))
   }


   return (
      <div className={styles.divPrincipal}>
         <input className={styles.input} onChange={handleChange} type='search' placeholder='Search...' />
         <button className={styles.button} onClick={() => {
               handleClick()
               const inp = document.querySelector("input") // se toma el input de linea 16
               inp.value = "" // se elimina el numero que se acaba de agregar de la search bar para evitar que el usuario tenga que borrarlo
            }}>Find</button>
      </div>
   );
}