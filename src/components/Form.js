import React, { useState } from 'react'
import Todo from './Todo'

function Form() {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    const handleChange =(e)=>{
        setInput(e.target.value)
        console.log(input)

    }
    const handleClick =(e)=>{
        e.preventDefault();
        setTodos([...todos, {text: input, completed: false, id: Math.random() *1000}]);
        setInput('')


    }
    
  return (
      <div className='bg-gray-500 h-screen'>
     <div className='flex justify-center pt-5'>
         <input value={input} onChange={handleChange} type="text" className=" form-control block w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your todo"/>
         <button onClick={handleClick} type='submit' className='border px-5 ml-2 bg-gray-600 text-white rounded'>Add</button>   
     </div>
     <div class="flex justify-center flex-wrap mt-10">
        {todos.map((todo)=>{
                return (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodo={setTodos}/>

                )
            })}
        
    </div>
     
     </div>
  )
}

export default Form


