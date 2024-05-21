import React from 'react'

function Button({upCount, text}) {

  return (
    <button onClick={upCount}>{text}</button>
  )
}

export default Button