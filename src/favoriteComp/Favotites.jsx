import React from 'react'
import { Favoritespg } from '../favoriteComp/Favoritespg'



export const Favorites = ({task, deleteFav}) => {

  
  return (
    <div className=' flex justify-center py-1  px-4 border-x-8 border-b-4  border-green-600 mx-96'>
    <div className=' '>
        <p className='flex flex-row  justify-center pr-3 text-xl'>{task.task}</p>

        <div className=' flex flex-row'>
        <h3 onClick={() => deleteFav(task.id)} ><i class=" flex flex-row fa-solid fa-trash pl-2 hover:text-slate-500" ></i></h3>
        </div>
        
    </div>
    </div>
  )
}

