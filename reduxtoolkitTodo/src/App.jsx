import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 

  return (
    <> 
    <div className='flex flex-col justify-center items-center bg-orange-100 min-h-screen'>
   <div className='bg-rose-200 rounded-lg w-120' >
     <h1 className=' text-center text-4xl text-red-400 mt-3'>Redux Toolkit</h1>
    <AddTodo />
    <Todos />
    </div></div>
    </>
  )
}

export default App
          
          