import React from 'react'

function Todo({item, deleteTodo}) {

  return (
    <div style={{display: 'flex'}}>
      <p>{item.text}</p>
      <button style={{padding: '5px'}} onClick={() => deleteTodo(item.id)}>X</button>
      <button style={{padding: '5px'}}>\/</button>
    </div>
  )
}

export default Todo