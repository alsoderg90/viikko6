import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    
    const dispatch = useDispatch()
    useSelector(state => state)

    const create = (event) => {
        event.preventDefault()
        const content = event.target.text.value
        event.target.text.value = ''
        dispatch(addAnecdote(content))
      }

    return (
        
    <form onSubmit={create}>
        <h2>Create new</h2>
        <div><input name='text'/></div>
        <button type='submit'>Create</button>
     </form>
    )
}

export default AnecdoteForm