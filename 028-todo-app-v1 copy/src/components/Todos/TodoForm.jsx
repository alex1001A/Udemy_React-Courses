import React from 'react'

import Button from '../UI/Button'

export default function TodoForm({value, setValue, onClick}) {
  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <Button onClick={onClick}>Add task</Button>
    </div>
  )
}
