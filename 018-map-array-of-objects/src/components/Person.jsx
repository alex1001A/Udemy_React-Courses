import React from 'react'

function Person(props) {

    const { firstName, lastName, img, email} = props

  return (
    <div className='card'>
        <img src={img} alt={firstName}/>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <p>{email}</p>
    </div>
  )
}

export default Person