import React from 'react'
import { useSelector } from 'react-redux'
import notificationReducer from '../reducers/notificationReducer'

const Notification = () => {

  const notification = useSelector(state => state.notification) 
  
  var style = null
  
  if (notification.length === 0) {
 
    style = {
      border: 'none',
      padding: 10,
      borderWidth: 1
    }
  }

  if (notification.length > 0) {
    style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
  }


  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification