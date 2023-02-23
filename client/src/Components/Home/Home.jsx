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
                <select name="filterByCreated" defaultValue="Default" onChange = {handleFilterCreated} >
                    <option key="Created in" value="" hidden>Created in</option>
                    <option key="all" value="All">All</option>
                    <option key="Api" value="Api">Api</option>
                    <option key="created" value="created">Data Base</option>
                </select>
                <span>Temperament </span>
                <select name="filterByTemperament" defaultValue="Default" >
                    {/*temperaments*/}
                </select>
                <select name="orderByName" defaultValue="Default" onChange = {handleOrderName}>
                    <option key="Letter" value="" hidden>Order By Name</option>
                    <option key="A-Z" value="A-Z">A-Z</option>
                    <option key="Z-A" value="Z-A">Z-A</option>
                </select>
                <select name="orderByWeight" defaultValue="Default" onChange = {handleOrderWeight}>
                <option key="Weight" value="" hidden>Order By Weight</option>
                    <option key="MinWeight" value="MinWeight">Min Weight</option>
                    <option key="MaxWeight" value="MaxWeight">Max Weight</option>
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