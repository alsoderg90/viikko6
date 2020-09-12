import React from 'react'
import AnecdoteForm from './components/AnocdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {


  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App