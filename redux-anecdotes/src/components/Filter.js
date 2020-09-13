import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdote } from '../reducers/filterReducer'

const Filter = () => {

    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        //event.preventDefault()
        const filter = event.target.value
        console.log(filter, "filter")
        dispatch(filterAnecdote(filter))
    }

    return (
        <div>
            filter <input onChange={handleChange}></input>
        </div>
    )
}

export default Filter