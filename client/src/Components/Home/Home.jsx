import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import { getTemperaments } from '../../Redux/Actions/getTemperaments.js';
import { useDispatch, useSelector } from "react-redux"
import { getBreeds } from "../../Redux/Actions/getBreeds.js"
import { filterCreated } from "../../Redux/Actions/filterCreated.js";
import { orderByName } from "../../Redux/Actions/orderByName.js";
import { orderByWeight} from "../../Redux/Actions/orderByWeight.js"
import { filterTemperament } from "../../Redux/Actions/filterTemperament.js"
import { setPage } from "../../Redux/Actions/SetPage.js"
import Loading from "../Loading/Loading.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Card from "../Card/Card.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import Nav from "../Nav/Nav.jsx"
import styles from "./Home.module.css"


export default function Home () {


    const dispatch = useDispatch()
    const allBreeds = useSelector ((state) => state.breeds)
    //const actualPage = useState ((state) => state.currentPage)
    const allTemperaments = useSelector ((state) => state.temperaments)
    const currentPage = useSelector((state) => state.paginated)
    const [breedsPerPage, setBreedsPerPage] = useState(8)
    const [order, setOrder] = useState("")
    const indexOfLastBreed = currentPage * breedsPerPage
    const indexOfFirstBreed = indexOfLastBreed - breedsPerPage
    const currentBreeds = allBreeds.slice(indexOfFirstBreed, indexOfLastBreed)


    useEffect(() => {
        if (currentBreeds.length < 1) {
            dispatch(getBreeds())
            dispatch(getTemperaments())
        }
    },[dispatch])

    const paginated = (pageNum) => {
        dispatch(setPage(pageNum))
    }

    
    function showAllBreeds(event){
        event.preventDefault()
        dispatch(setPage(1))
        dispatch(getBreeds())
    }


    function handleFilterCreated (event) {
        event.preventDefault()
        dispatch(setPage(1))
        dispatch(filterCreated(event.target.value))
    }


    function handleFilterTemperament(event) {
        event.preventDefault()
        dispatch(setPage(1))
        dispatch(filterTemperament(event.target.value))
        setOrder(event.target.value)
    }


    function handleOrderName (event) {
        event.preventDefault()
        dispatch(setPage(1))
        dispatch(orderByName(event.target.value))
        setOrder(event.target.value)
    }


    function handleOrderWeight (event) {
        event.preventDefault()
        dispatch(setPage(1))
        dispatch(orderByWeight(event.target.value))
        setOrder(event.target.value)
    }


    function handlePagPrevious(event) {
        if (currentPage > 1) {
            dispatch(setPage(currentPage - 1))
        }   
    }


    function handlePagNext(event) {
        if (currentPage < 22) {
            dispatch(setPage(currentPage + 1))
        }
    }
    

    function handleReset(event){
        event.preventDefault()
        window.location.reload()
    }

    
    return (
        <div>
            <Nav showAllBreeds= {showAllBreeds}/>
            <div>
                <div className={styles.divSelect}>
                    <select name="filterByCreated" defaultValue="Default" onChange = {(event) => handleFilterCreated(event)} >
                        <option key="Created in" value="" hidden>Created in</option>
                        <option key="All" value="All">All</option>
                        <option key="Api" value="Api">Api</option>
                        <option key="created" value="created">Data Base</option>
                    </select>
                    <select name="filterByTemperament" defaultValue="Default" onChange={(event) => handleFilterTemperament(event)} >
                        <option key="Temperaments" value="" hidden>Filter By Temperament</option>
                        <option key="All" value="All">All</option>
                        {
                            allTemperaments?.map((temperament, i) => {
                                return <option key={temperament.name + i} value={temperament.name}>{temperament.name}</option>
                            })
                            }
                    </select>
                    <select name="orderByName" defaultValue="Default" onChange = {(event) => handleOrderName(event)}>
                        <option key="Letter" value="" hidden>Order By Name</option>
                        <option key="A-Z" value="A-Z">A-Z</option>
                        <option key="Z-A" value="Z-A">Z-A</option>
                    </select>
                    <select name="orderByWeight" defaultValue="Default" onChange = {(event) => handleOrderWeight(event)}>
                    <option key="Weight" value="" hidden>Order By Weight</option>
                        <option key="MinWeight" value="MinWeight">Min Weight</option>
                        <option key="MaxWeight" value="MaxWeight">Max Weight</option>
                    </select>
                    <button onClick={handleReset}>Reset Filters</button>
                </div>
                
                <br/>
                <div className={styles.divPaginated}>
                    <Paginated 
                        breedsPerPage = {breedsPerPage} 
                        current = {currentPage}
                        handlePrevious = {handlePagPrevious}
                        handleNext = {handlePagNext}
                        allBreeds = {allBreeds.length} 
                        paginated = {paginated}
                    />
                </div>
                
                <br/>
                <div className={styles.divCard}>
                    {currentBreeds.length > 0 ? currentBreeds?.map((breed) => {
                        return (
                            <Card
                                id = {breed.id} 
                                name = {breed.name} 
                                image = {breed.image} 
                                temperament = {breed.temperament}
                                min_weight = {breed.min_weight}
                                max_weight = {breed.max_weight}
                                min_height = {breed.min_height}
                                max_height = {breed.max_height}
                            />
                        )
                    }) : <Loading />}
                </div>
                <div className={styles.divPaginated}>
                    <Paginated 
                        breedsPerPage = {breedsPerPage} 
                        current = {currentPage}
                        handlePrevious = {handlePagPrevious}
                        handleNext = {handlePagNext}
                        allBreeds = {allBreeds.length} 
                        paginated = {paginated}
                    />
                </div>
                
            </div>
        </div>
    )
}