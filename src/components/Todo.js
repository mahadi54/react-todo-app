import React from 'react'

function Todo({todo, todos, setTodo}) {
    const handleDelete =()=>{
  
        setTodo(todos.filter((element)=>(
            element.id !== todo.id
        )))
    }

    const handleComplete = ()=>{
        setTodo(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }

            }
            return item;

        }))

    }
  return (
    <div class="flex flex-col justify-between p-6 rounded-lg shadow-xl bg-gray-200 w-80 h-48 mx-5 overflow-hidden my-5"style={{overflowWrap: 'break-word'}}>
            <div>
                <h5  class={`text-gray-900 text-xl leading-tight font-medium mb-2 ${todo.completed ? 'completed': ''}`}>{todo.text}</h5>
            </div>
            <div className='flex justify-between'>
                <button onClick={handleDelete} type="button" class=" px-5 py-2.5 bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                <button onClick={handleComplete}  type="button" class=" px-5 py-2.5 bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{todo.completed? 'completed': 'complete'}</button>
            </div>
    </div>
  )
}

export default Todo