import React, { useState } from "react"
import styles from "./Form.module.css"
import { Link, useNavigate } from "react-router-dom"
import { addBreed } from "../../Redux/Actions/addBreed"
import { useSelector, useDispatch } from "react-redux";
import { Validate } from "./Validate";


export default function Form () {

    const dispatch = useDispatch()
    const allTemperament = useSelector(state=>state.temperaments)
    const navigate = useNavigate()

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


    const [errors, setErrors] = useState({});


    const handleSubmit = (event) => {
        event.preventDefault()
        alert("The Breed was created successfully")
        dispatch(addBreed(input))
        console.log(input)
        navigate("/home")
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


        setErrors(Validate({
            ...input,
            [event.target.name]: event.target.value
        }))
    }
    

    return (
        <div className={styles.divPrincipal}>
            <Link to= {`/home`}><button>Home</button></Link>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            value= {input.name}
                            className={errors.name && 'warning'}
                            onChange={handleInputChange} 
                            autoComplete= "off"
                            name="name"
                            placeholder="Breed Min Name"
                        ></input>
                         {input.name.length ? errors.name && <p className={styles.danger}>{errors.name}</p> : null}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="min_height">Min Height: </label>
                        <input
                            type="number"
                            className={errors.min_height && 'warning'}
                            value= {input.min_height}
                            onChange={handleInputChange} 
                            name="min_height"
                            placeholder="Breed Height"
                        ></input>
                        {input.min_height.length ? errors.min_height && <p className={styles.danger}>{errors.min_height}</p> : null}
                        <br />
                        <label htmlFor="max_height">Max Height: </label>
                        <input
                            type="number"
                            className={errors.max_height && 'warning'}
                            value= {input.max_height}
                            onChange={handleInputChange} 
                            name="max_height"
                            placeholder="Breed Max Height"
                        ></input>
                        {input.max_height.length ? errors.max_height && <p className={styles.danger}>{errors.max_height}</p> : <p></p>}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="min_weight">Min Weight: </label>
                        <input
                            type="number"
                            className={errors.min_weight && 'warning'}
                            value= {input.min_weight}
                            onChange={handleInputChange} 
                            name="min_weight"
                            placeholder="Breed Min Weight"
                        ></input>
                        {input.min_weight.length ? errors.min_weight && <p className={styles.danger}>{errors.min_weight}</p> : <p></p>}
                        <br />
                        <label htmlFor="max_weight">Max Weight: </label>
                        <input
                            type="number"
                            className={errors.max_weight && 'warning'}
                            value= {input.max_weight}
                            onChange={handleInputChange} 
                            name="max_weight"
                            placeholder="Breed Max Weight"
                        ></input>
                        {input.max_weight.length ? errors.max_weight && <p className={styles.danger}>{errors.max_weight}</p> : <p></p>}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="life_span">Life Span: </label>
                        <input
                            type="number"
                            className={errors.life_span && 'warning'}
                            value= {input.life_span}
                            onChange={handleInputChange} 
                            name="life_span"
                            placeholder="Breed Life Span"
                        ></input>
                        {input.life_span.length ? errors.life_span && <p className={styles.danger}>{errors.life_span}</p> : <p></p>}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="breed_group">Breed Group: </label>
                        <input
                            type="text"
                            className={errors.breed_group && 'warning'}
                            value= {input.breed_group}
                            onChange={handleInputChange}
                            name="breed_group"
                            placeholder="Breed Group"
                        ></input>
                       {input.breed_group.length ? errors.breed_group && <p className={styles.danger}>{errors.breed_group}</p> : <p></p>}
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
                        <p>{input.temperament.length > 0 && input.temperament.map((temp) => {
                            return temp + " "
                        })}</p>
                    </div>
                    <br />
                    <button
                        type="submit"
                        disabled = {Object.values(errors).length > 0}
                    >Create</button>
                </form>
            </div>
        </div>
    )
}