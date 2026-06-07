import React from 'react'
import PropTypes from 'prop-types'

function UserProfile({username,age,isAdmin}){
  return (
    <div>
        <h4>UserName : {username}</h4>
        <h4>Age : {age}</h4>
        <h4>User : {isAdmin ? "Admin" : "Normal"} </h4>
    </div>
  )
}

UserProfile.propTypes = {
  username : PropTypes.string,
  age : PropTypes.number,
  isAdmin : PropTypes.bool
}

export default UserProfile