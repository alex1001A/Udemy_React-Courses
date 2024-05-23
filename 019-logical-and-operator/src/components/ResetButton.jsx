import React from 'react'

const buttonStyle = {
    background: "teal",
  };

function ResetButton({reset}) {
  return (
    <div>
        <button style={buttonStyle} onClick={reset}>
            Reset
          </button>
    </div>
  )
}

export default ResetButton