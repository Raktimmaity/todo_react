import React from 'react'
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Content = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    useEffect(()=>{
      let todoString = localStorage.getItem("todos")
      if(todoString){
        let todos = JSON.parse(localStorage.getItem("todos"))
        setTodos(todos) 
      }
    }, [])
    const save = ()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  
    const handleAdd = () =>{
     setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
     setTodo("") 
     console.log(todos);
     save()
    }
  
    const handleChange = (e) =>{
      setTodo(e.target.value)
    }
    const handleEdit = (e, id) =>{
      let t = todos.filter(i =>i.id === id)
      setTodo(t[0].todo)
      let newTodos = todos.filter(item=>{
        return item.id !== id
      });
      setTodos(newTodos)
      save()
    }
    const handleDelete = (e, id) =>{
     let newTodos = todos.filter(item=>{
        return item.id !== id
      });
      setTodos(newTodos)
      save()
    }
    const handleCheckbox = (e) =>{
      let id = e.target.name;
      let index = todos.findIndex(item=>{
        return item.id === id;
      })
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
      save()
    }
  return (
    <>
      <div className="grid place-content-center items-center h-[100vh] ">
        <div className="text-center p-5 bg-[#ffffffe6] rounded-xl w-[350px] md:w-[500px] md:mt-8">
          <h1 className="text-[#3949ab] text-3xl font-bold">To-do List</h1>
          <div className="flex flex-wrap flex-col md:flex-row gap-3 md:gap-0 justify-between w-full p-3">
            <input onChange={handleChange} value={todo} type="text" name="" id="" className="p-2 border-0 rounded-md outline-none md:w-4/5" placeholder="Enter task..."/>
            <button onClick={handleAdd} className="bg-[#3949ab] text-white border-0 p-2 rounded-md cursor-pointer">Add Task</button>
          </div>
          <div className="overflow-y-auto h-72 p-3">
          {todos.length === 0 && <div className="bg-white text-gray-400 p-2 rounded-md">No tasks found</div> }
          {todos.map(item=>{
        return <div key={item.id} className="list-none p-0 mt-5">
            <div className="flex flex-wrap justify-between items-center mb-3 p-3 bg-white rounded-md">
              <input onChange={handleCheckbox} class="checkbox bg-black" type="checkbox" value={item.isCompleted} name={item.id} id="" />
            <span className={item.isCompleted?"line-through text-gray-400":""}>{item.todo}</span>
            <div className="flex flex-wrap justify-between items-center gap-1">
              <button onClick={(e)=>{handleEdit(e, item.id)}} className="p-2 bg-blue-500 text-white rounded-md"><i class="fa-solid fa-pen"></i></button>
              <span className="text-gray-400"> | </span>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className="p-2 bg-red-500 text-white rounded-md"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            </div>
          </div>
          })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
