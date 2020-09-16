import { useSelector, useDispatch } from 'react-redux'
const initialState = ''

const notificationReducer = (state = initialState, action) => {

    switch(action.type) {
      case 'NOTIFICATION':
        return action.message
      default: return state
      }
  }

export const setNotification = (message, time) => {

  console.log(message, "Moi")
  return dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      message: message
    })
    setTimeout(() => {
      dispatch({
        type: 'NOTIFICATION',
        message: ''
      })
    },time*100)
  }
}


export default notificationReducer