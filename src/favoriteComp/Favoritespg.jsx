import {React, useState} from 'react'
// import { favoritesForm } from './favoritesForm'
import { v4 as uuidv4 } from 'uuid'
import { FavoritesForm } from './favoritesForm'
import { Favorites } from './Favotites';
import { Link } from 'react-router-dom';

uuidv4();



export const Favoritespg = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  const deleteFav = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
       <button className=' pl-20 text-green-500'> <Link to='/Select'> <i class="fa-solid fa-arrow-left"></i> Back</Link></button>
      <h1 className='flex justify-center text-3xl border-8 text-white border-green-600 bg-green-500 py-3 mx-96 mt-6 font-semibold '>Check your favorites</h1>
  <FavoritesForm addTodo={addTodo}/>
  {todos.map((todo, index) => (
    <Favorites task={todo} key={index}
    deleteFav={deleteFav} />
  ))}
  </div>
  )
}

export default Favoritespg
