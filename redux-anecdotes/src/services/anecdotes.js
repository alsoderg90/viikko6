import axios from 'axios'
import anecdoteReducer from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (content) => {
    const anecdote = {content, votes: 0}
    const response = await axios.post(baseUrl, anecdote)
    console.log(response.data, 1)
    return response.data
}

const vote = async (anecdote) => {
    console.log(anecdote.id, anecdote, 'moi12')
    const updated = { ...anecdote, votes: anecdote.votes + 1 }
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, updated)
    return response.data
}


export default { getAll, create, vote }