import React from 'react';
import PropTypes from 'prop-types'; // ES6
import UserIcon from "../UserIcon.png"

const UserDetails = (props) => {
    console.log(props)
  return (
    <div>
        <h2>User Details</h2>
        <img src={props.userImg} alt='userIcon'/>
        <h3> {props.name} </h3>
        <h3> {props.lakab} </h3>
        <h3> {props.myPhone} </h3>
        
    </div>
  )
}

UserDetails.defaultProps = {
    userImg:UserIcon
}

UserDetails.propTypes = {
    name: PropTypes.string
}

export default UserDetails