import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Check = ({isCompleted}) => {
  return (
    <div className={
        `border border-danger rounded-circle checkborder 
        ${isCompleted ? 'bg-danger' : ''}`
        }>
        {isCompleted && <BsCheck className="text-dark checksize"/>}
    </div>
  )
}

export default Check