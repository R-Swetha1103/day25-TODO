
import React, { useState } from 'react'
import TopBar from './components/TopBar'
function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:" Office Task-1",
    description:"this is the description for My first Task",
    status:false

  },
  {
    id:2,
    title:" Office Task-2",
    description:"this is the description for My second Task",
    status:true
    
  },
  {
    id:3,
    title:" Office Task-3",
    description:"this is the description for My third Task",
    status:false
    
  }
])
let [completed,setCompleted]=useState("All")
  return <>
  <TopBar todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  </>
}

export default App
