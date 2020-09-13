const initialState = ''

const filterReducer = (state = initialState, action) => {
    console.log(action.filter, 'reducer')
    switch (action.type) {
        case 'FILTER':
            return action.filter
        default: return state 
    }
}

export const filterAnecdote = (filter) => {
    return {
        type: 'FILTER',
        filter : filter
    }
}

export default filterReducer