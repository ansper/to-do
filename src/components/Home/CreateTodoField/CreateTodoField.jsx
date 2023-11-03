import React, {useState} from 'react'

const CreateTodoField = ({setTodos}) => {
const [title, setTitle] = useState('')

const addTodo = (title) => {
    setTodos(prev => [{
        _id: new Date(),
        title,
        isCompleted: false
    },
    ...prev
    ])
    setTitle('')
}

  return (
    <div className='p-3 d-flex justify-content-md-between align-items-center rounded-4 bg-secondary w-50 mx-auto mb-3 pe-auto'>
        <input 
            className='add__todo'
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            onKeyPress={e => e.key === 'Enter' && addTodo(title)}
            placeholder='Add a tack'
        />
    </div>
  )
}

export default CreateTodoField