import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider, useTodo } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
    const [todos,setTodos]=useState([])

    const addTodo=(todo)=>{
        setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
    }
    const updateTodo=(id,todo)=>{
        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo : prevTodo)))
    }
    const deleteTodo=(id)=>{
        setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
    }
    const toggleComplete=(id)=>{
        setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed} :prevTodo))
    } 
    useEffect(()=>{
        const todos=JSON.parse(localStorage.getItem("todos"))

        if(todos && todos.length>0){
            setTodos(todos)
        } 
    },[])
useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
    return (
    <TodoProvider value={{todos,addTodo,updateTodo,toggleComplete,deleteTodo}}>
    <div className=" flex justify-center items-center bg-gradient-to-br from-rose-100 via-purple-100 to-teal-100 h-screen py-8">
                <div className="bg-white/30 backdrop-blur-lg  border border-white/20 w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-zinc-800">
                    <h1 className="text-4xl font-bold tracking-tight text-center mb-8 mt-2">Todo App (Task Tracker)</h1>
                    <h2 className=' text-2xl font-semibold text-center mb-4'>Make your task ready with making Todo List</h2>
                    <div className="mb-8 transform hover:scale-[1.01] transition-transform">
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       {todos.map((todo)=>(
                        <div key={todo.id} className='animate-in fade-in slide-in-from-bottom-4 duration-500 w-full'>
                            <TodoItem todo={todo}/>
                        </div>
                       ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
  )
}

export default App
