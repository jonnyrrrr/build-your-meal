import { fetchRecipe } from "../api/serverCalls"
import { fetchIng } from "../api/serverCalls"
import {React, useState} from 'react'
import { Link } from "react-router-dom"


const FoodSearch = () => {

  const [value, setValue] = useState("")

    const handleSubmit = e => {
      e.preventDefault()
    
      addTodo(value)

      setValue("")
    }

    

    return (
      <div
      className='flex flex-col p-4 justify-between items-center font-semibold pt-10 '> 
       <button className='mr-96 pr-96 text-green-500'> <Link to='/Select'> <i class="fa-solid fa-arrow-left"></i> Back</Link></button>
      <h1 className='pr-3'> Search Recipe Here: <i className="fa-solid fa-magnifying-glass"></i> <input type="text" className='border-2 border-gray-300' id='category' placeholder='ex. Chicken' onChange={(e) => setValue(e.target.value)} /> </h1>
      <button id='btn1' className='mt-6 bg-green-600 p-1 shadow rounded border-2 border-black text-white' onClick={fetchRecipe}>Search</button>
  
      <h1 id='display' className='mt-4 border-black pb-10'></h1>

      <h1 className='pr-3'> Search Ingredients Here: <i className="fa-solid fa-magnifying-glass"></i> <input type="text" className='border-2 border-gray-300' id='category' placeholder='Enter meal name' /> </h1>
      <button id='btn1' className='mt-6 bg-green-600 p-1 shadow rounded border-2 border-black text-white' onClick={fetchIng}>Search</button>
        <div className="flex flex-col">
      <ul id='ingredient-list'></ul>
      <ul id='ingredient-list2'></ul>
      <ul id='ingredient-list3'></ul>
      </div>


      
      </div>
    )
  }
  
  export default FoodSearch


import { Form } from 'react-hook-form'

export const FavoritesForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
      e.preventDefault()
    
      addTodo(value)

      setValue("")
    }
    
      return (
        <div className='flex justify-center ' onSubmit={handleSubmit}>
         <form className='FavoriteForm flex justify-center bg-green-600 mt-5 pb-10 p-2'>
            <input type='text' value={value} className='fav-input' placeholder='Placeholder' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='fav-btn'>Add to To-Do List</button>
        </form>
        </div>
      )
}