import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div 
            className='p-3 d-flex justify-content-md-between align-items-center rounded-4 bg-secondary w-50 mx-auto mb-3 pe-auto'
            >
            <button className='d-flex' onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted} />
                {todo.title}
            </button>
            <button>
                <BsTrash 
                    className='text-dark checksize'
                    onClick={() => removeTodo(todo._id)}
                />
            </button>
        </div>
    )
}

export default TodoItem