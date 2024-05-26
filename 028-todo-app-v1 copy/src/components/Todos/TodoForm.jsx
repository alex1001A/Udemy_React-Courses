import React, {useState} from 'react'
import Button from '../UI/Button'
import { useEffect } from 'react'

function TodoForm() {

    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    })

    function addTask() {
        const task = {
            task: value
        }

        setData(prevData => [...prevData, task])
        setValue('')
    }

  return (
    <div>
        <input 
        type="text" 
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        <Button onClick={addTask}/>
    </div>
  )
}

export default TodoForm