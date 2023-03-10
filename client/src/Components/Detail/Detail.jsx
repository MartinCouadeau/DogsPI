import React from "react"
import styles from "./Detail.module.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom"
import { getDetail } from "../../Redux/Actions/getDetail"
import { emptyDetail } from "../../Redux/Actions/emptyDetail"
import { deleteBreed } from "../../Redux/Actions/deleteBreed"
import Loading from "../Loading/Loading";


export default function Detail () {

    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const breed = useSelector((state) => state.detail)


    useEffect(() => {
      dispatch(emptyDetail())
      dispatch(getDetail(id))
    }, [id]);


    function handleDelete (event) {
      event.preventDefault();
      dispatch(deleteBreed(id))
      alert("Dog successfully removed")
      navigate('/home')
      window.location.reload() 
    }


    function handleUpdate (event) {
      event.preventDefault()
      navigate(`/update/${id}`)

    }

    return (
        
        <div className={styles.divPrincipal}>
          { breed.length > 0 ? 
            <div className={styles.divDatos}>
              <Link to= {`/home`}><button className={styles.btn} >Home</button></Link>
              <h1>Name: {breed[0].name ? breed[0].name : ""}</h1>
              <br></br>
              <h3>Id: {breed[0].id ? breed[0].id: ""}</h3>
              <br></br>
              <h3>Height: {breed[0].min_height ? breed[0].min_height : ""} - {breed[0].max_height ? breed[0].max_height : ""}CM</h3>
              <br></br>
              <h3>Weight: {breed[0].min_weight ? breed[0].min_weight : ""} - {breed[0].max_weight ? breed[0].max_weight : ""}KG</h3>
              <br></br>
              <h3>Life Span: {breed[0].life_span ? breed[0].life_span : ""}</h3> 
              <br></br>
              <h3>Breed Group: {breed[0].breed_group ? breed[0].breed_group : ""}</h3>
              <h3>Temperament: {breed[0].temperament ? breed[0].temperament : ""}</h3>
              <div>
                <img 
                width= "300px" 
                height= "200px"
                className={styles.foto} 
                src={breed[0].image ? breed[0].image : ""} 
                alt="" />
              </div> 
              { breed[0].createInDb ? 
                <div>
                  <br /> 
                  <h3>This breed was created in this page</h3>
                  <br />
                  <div className={styles.divBtn}>
                    <button className={styles.btn} onClick={handleUpdate}>Edit</button> 
                    <button className={styles.btn} onClick={handleDelete}>Delete</button>
                  </ div>
                  
                </div> : ""}
            </div> : <Loading />}
           
        </div>
    )
}


       /*

    name: breed[0].name ? breed[0].name : "...",
        min_height:  breed[0].min_height ? breed[0].min_height : "...",
        max_height:  breed[0].max_heigh ? breed[0].max_heigh : "...",
        min_weight:  breed[0].min_weight ? breed[0].min_weight : "...",
        max_weight:  breed[0].max_weight ? breed[0].max_weight : "...",
        life_span:  breed[0].life_span ? breed[0].life_span : "...",
        breed_group:  breed[0].breed_group ? breed[0].breed_group : "...",
        image:  breed[0].image ? breed[0].image : "...",
        temperament:  breed[0].temperament ? breed[0].temperament : "..."

        */