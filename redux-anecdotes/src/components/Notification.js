import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  var style = null
  
  if (props.notification.length === 0) {
 
    style = {
      border: 'none',
      padding: 0,
      borderWidth: 1
    }
  }

  if (props.notification.length > 0) {
    style = {
      border: 'solid',
      padding: 5,
      borderWidth: 1
    }
  }


  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConntectedNotification = connect(mapStateToProps)(Notification)
export default ConntectedNotification