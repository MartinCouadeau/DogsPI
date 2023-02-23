import React from "react"
import styles from "./Detail.module.css"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom"
import { getDetail } from "../../Redux/Actions/getDetail"


export default function Detail () {

    const dispatch = useDispatch()
    const {id} = useParams()
    const breed = useSelector((state) => state.detail)


    useEffect(() => {
        dispatch(getDetail(id))
    }, [id]);


    return (
        
        <div className={styles.divPrincipal}>
          { breed.length > 0 ? 
            <div className={styles.divDatos}>
              <Link to= {`/home`}><button>Home</button></Link>
              
              <h1>Name: {breed[0].name ? breed[0].name : ""}</h1>
              <br></br>
              <h3>Height: {breed[0].min_height ? breed[0].min_height : ""} - {breed[0].max_height ? breed[0].max_height : ""}CM</h3>
              <br></br>
              <h3>Weight: {breed[0].min_weight ? breed[0].min_weight : ""} - {breed[0].max_weight ? breed[0].max_weight : ""}KG</h3>
              <br></br>
              <h3>Life Span: {breed[0].life_span ? breed[0].life_span : ""}</h3> 
              <br></br>
              <h3>Breed Group: {breed[0].breed_group ? breed[0].breed_group : ""}</h3>
              <h3>Temperament: {breed[0].temperament ? breed[0].temperament : ""}</h3>
              { breed[0].createInDb ? <h3>This breed was created in this page</h3> : ""}
              <div>
                <img className={styles.foto} src={breed[0].image.url ? breed[0].image.url : ""} alt="" />
              </div> 
            </div> : "loading"}
           
        </div>
    )
}