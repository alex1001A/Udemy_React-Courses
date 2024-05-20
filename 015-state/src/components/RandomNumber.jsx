import React, {useState} from 'react'

import {getRandomNumber} from '../utils/generateRandomNum'

function RandomNumber({maxNum}) {

    console.log('render');

const [randomNum, setRandomNum] = useState(getRandomNumber(maxNum))

const changeRandomNum = () => {
    setRandomNum(getRandomNumber(maxNum))
}

  return (
    <div>
        <h1>{randomNum}</h1>
        <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber