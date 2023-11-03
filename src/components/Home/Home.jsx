import React, {useState} from "react"
import CreateTodoField from "./CreateTodoField/CreateTodoField"
import TodoItem from "./item/TodoItem"

const data = [
    {
        _id: "1",
        title: "Watch video about react",
        isCompleted: false,
    },
    {
        _id: "2",
        title: "Make a to-do app",
        isCompleted: false,
    },
    {
        _id: "3",
        title: "become happy",
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)
    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id != id))
    }

    return (
        <div className="vh-100 bg-dark text-white">
            <h1 className="text-center mb-4 pt-4">Todo</h1>
            {todos.map(todo => (
                <TodoItem 
                    key={todo._id} 
                    todo={todo} 
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodoField setTodos={setTodos}/>
        </div>
    )
}

export default Home