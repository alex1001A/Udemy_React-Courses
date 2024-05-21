import React from 'react'

import Person from './Person'

import mockData from '../data/MOCK_DATA.json' 

function Persons() {

  return (
    <div className='cards'>
        {
        mockData.map((person) => {
          return <Person key={person.id} {...person}/>
        })
      }
    </div>
  )
}

export default Persons