
const initialState = ''

const notificationReducer = (state = initialState, action) => {

    switch(action.type) {
      case 'NOTIFICATION':
        return action.message
      default: return state
      }
  }

export const setNotification = (message) => {
  console.log(message, "Moi")
    return {
        type: 'NOTIFICATION',
        message: message
    }
}

export default notificationReducer