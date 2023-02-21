import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import { getBreeds } from "../../Redux/Actions/index.js"
import { Link } from "react-router-dom"


export default function Home () {

    const dispatch = useDispatch()
    const allBreeds = useSelector ((state) => state.breeds)

    useEffect(() => {
        dispatch(getBreeds())
    },[])

    function showAllBreeds(event){
        event.preventDefault()
        dispatch(getBreeds())
    }
    
    return (
        <div>
            <Link to= "/dogs" >Create Breed</Link>
            <button onClick={event => {showAllBreeds(event)}}>
                Show all Breeds
            </button>
            <div>
                <select name="filterByCharacteristics" defaultValue="Default" >
                    <option value="Default">Default</option>
                    <option value="Name">Name</option>
                    <option value="Height">Height</option>
                    <option value="Weight">Weight</option>
                </select>
                <select name="filterByCreated" defaultValue="Default" >
                    <option value="All">All</option>
                    <option value="Api">Api</option>
                    <option value="DB">Data Base</option>
                </select>
                <select name="filterByTemperament" defaultValue="Default" >
                    // temperaments
                </select>
                <select name="order" defaultValue="Default" >
                    <option value="Default">Default</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
            </div>
        </div>
    )
}