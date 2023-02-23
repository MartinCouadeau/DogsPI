import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetail } from "../../Redux/Actions/getDetail"


export default function Detail () {

    const dispatch = useDispatch()
    const {id} = useParams()
    const breed = useSelector((state) => state.detail)


    useEffect(() => {
        dispatch(getDetail(id))
    }, [id]);


    return (
        <div>
            {console.log(breed[0].name)}
            <h1>{id}</h1>
            
        </div>
    )
}