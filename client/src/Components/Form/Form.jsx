import React, { useState } from "react"
import { Link } from "react-router-dom"
import { addBreed } from "../../Redux/Actions/addBreed"
import { useSelector, useDispatch } from "react-redux";


export default function Form () {

    const dispatch = useDispatch()
    const allTemperament = useSelector(state=>state.temperaments)

    const [input, setInput] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span: "",
        breed_group: "",
        image: "",
        temperament: []
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        alert("The Breed was created successfully")
        dispatch(addBreed(input))
    }


    const handleTemperament = (event) => {
        event.preventDefault()
        setInput({
            ...input,
            temperament: [...input.temperament, event.target.value]
        })
    }

    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <Link to= {`/home`}><button>Home</button></Link>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            value= {input.name}
                            onChange={handleInputChange} 
                            name="name"
                            placeholder="Breed Min Name"
                        ></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="min_height">Min Height: </label>
                        <input
                            type="text"
                            value= {input.min_height}
                            onChange={handleInputChange} 
                            name="min_height"
                            placeholder="Breed Height"
                        ></input>
                        <br />
                        <label htmlFor="max_height">Max Height: </label>
                        <input
                            type="text"
                            value= {input.max_height}
                            onChange={handleInputChange} 
                            name="max_height"
                            placeholder="Breed Max Height"
                        ></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="min_weight">Min Weight: </label>
                        <input
                            type="text"
                            value= {input.min_weight}
                            onChange={handleInputChange} 
                            name="min_weight"
                            placeholder="Breed Min Weight"
                        ></input>
                        <br />
                        <label htmlFor="max_weight">Max Weight: </label>
                        <input
                            type="text"
                            value= {input.max_weight}
                            onChange={handleInputChange} 
                            name="max_weight"
                            placeholder="Breed Max Weight"
                        ></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="life_span">Life Span: </label>
                        <input
                            type="text"
                            value= {input.life_span}
                            onChange={handleInputChange} 
                            name="life_span"
                            placeholder="Breed Life Span"
                        ></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="breed_group">Breed Group: </label>
                        <input
                            type="text"
                            value= {input.breed_group}
                            onChange={handleInputChange}
                            name="breed_group"
                            placeholder="Breed Group"
                        ></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input
                            type="text"
                            value={input.image}
                            onChange={handleInputChange}
                            name="image"
                            placeholder="Breed Image"
                        ></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="Temperament">Temperament: </label>
                        <select name="filterByTemperament" defaultValue="Default" onChange={(event) => handleTemperament(event)} >
                            <option key="Temperaments" value="" hidden>Breed Temperament</option>
                            {
                                allTemperament.length > 0 && allTemperament.map((temperament, i) => {
                                    return <option key={temperament.name + i} value={temperament.name}>{temperament.name}</option>
                                })
                                }
                        </select>
                    </div>
                    <br />
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}

/*nombre
altura
peso
años de vida
temperamentos
boton para crear*/