import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBreeds } from "../../Redux/Actions/getBreeds.js"
import { filterCreated } from "../../Redux/Actions/filterCreated.js";
import { orderByName } from "../../Redux/Actions/orderByName.js";
import { orderByWeight} from "../../Redux/Actions/orderByWeight.js"
import Card from "../Card/Card.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import Nav from "../Nav/Nav.jsx"


export default function Home () {

    const dispatch = useDispatch()
    const allBreeds = useSelector ((state) => state.breeds)
    const [currentPage, setCurrentPage] = useState(1)
    const [breedsPerPage, setBreedsPerPage] = useState(8)
    const indexOfLastBreed = currentPage * breedsPerPage
    const indexOfFirstBreed = indexOfLastBreed - breedsPerPage
    const currentBreeds = allBreeds.slice(indexOfFirstBreed, indexOfLastBreed)


    const paginated = (pageNum) => {
        setCurrentPage(pageNum)
    }


    useEffect(() => {
        dispatch(getBreeds())
    },[dispatch])

    
    function showAllBreeds(event){
        event.preventDefault()
        dispatch(getBreeds())
    }


    function handleFilterCreated (event) {
        dispatch(filterCreated(event.target.value))
    }


    function handleOrderName (event) {
        dispatch(orderByName(event.target.value))
    }


    function handleOrderWeight (event) {
        dispatch(orderByWeight(event.target.value))
    }
    
    return (
        <div>
            <Nav showAllBreeds= {showAllBreeds}/>
            <div>
                <span>Created </span>
                <select name="filterByCreated" defaultValue="Default" onChange = {handleFilterCreated} >
                    <option value="All">All</option>
                    <option value="Api">Api</option>
                    <option value="created">Data Base</option>
                </select>
                <span>Temperament </span>
                <select name="filterByTemperament" defaultValue="Default" >
                    {/*temperaments*/}
                </select>
                <span>Order By Name</span>
                <select name="orderByName" defaultValue="Default" onChange = {handleOrderName}>
                    <option value="Default">Default</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <span>Order By Weight</span>
                <select name="orderByWeight" defaultValue="Default" onChange = {handleOrderWeight}>
                    <option value="Default">Default</option>
                    <option value="MinWeight">Min Weight</option>
                    <option value="MaxWeight">Max Weight</option>
                </select>
                <br/>
                <Paginated 
                    breedsPerPage = {breedsPerPage} 
                    allBreeds = {allBreeds.length} 
                    paginated = {paginated}
                />
                <br/>
                <div>
                    {currentBreeds?.map((breed) => {
                        return (
                            <Card
                                id = {breed.id} 
                                name = {breed.name} 
                                image = {breed.image.url} 
                                temperament = {breed.temperament}
                                min_weight = {breed.min_weight}
                                max_weight = {breed.max_height}
                            />
                        )
                    })}
                </div>
                <Paginated 
                    breedsPerPage = {breedsPerPage} 
                    allBreeds = {allBreeds.length} 
                    paginated = {paginated}
                />
            </div>
        </div>
    )
}