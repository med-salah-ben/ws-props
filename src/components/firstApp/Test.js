import React from 'react';
import UserDetails from "./UserDetails"

const Test = () => {
    const lastName = "ben foulen";
    const myPhone = 20202020;
    return (
     <div>
          <h1>ws-props</h1>
          <UserDetails name="foulan" lakab={lastName} myPhone={`my phone number is ${myPhone}`}  userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU" />
     </div>
     )
}

export default Test