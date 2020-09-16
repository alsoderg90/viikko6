import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList= (props) => {
    

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    //console.log(anecdotes, "1")
    //console.log(anecdotes.map(a => a.content),"2")
    const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))

    const vote = (anecdote) => {
        //console.log('vote', id)
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`You voted "${anecdote.content}"`, 35 ))
    }

    return (
        <div>
          {filteredAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
              </div>
            </div>
          )}
        </div>
    )
}

export default AnecdoteList