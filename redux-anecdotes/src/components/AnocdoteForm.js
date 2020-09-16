import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    
    const create = async (event) => {
        event.preventDefault()
        const content = event.target.text.value
        event.target.text.value = ''
        props.addAnecdote(content)
        props.setNotification(`You created "${content}"`,35)
      }

    return (
        
    <form onSubmit={create}>
        <h2>Create new</h2>
        <div><input name='text'/></div>
        <button type='submit'>Create</button>
     </form>
    )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  setNotification,
  addAnecdote
  
}

const connectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteForm)
export default connectedAnecdotes