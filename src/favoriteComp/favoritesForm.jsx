import {React, useState} from 'react'
import { Form } from 'react-hook-form'

export const FavoritesForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
      e.preventDefault()
    
      addTodo(value)

      setValue("")
    }
    
      return (
        <div className='flex justify-center bg-green-600 mx-96 pb-2 ' onSubmit={handleSubmit}>
         <form className='FavoriteForm flex justify-center bg-green-600 mt-5 pb-10 p-2'>
            <input type='text' value={value} className='fav-input' placeholder='Placeholder' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='fav-btn text-white ml-3 p-2 border-2 border-white'>Add to To Favorites</button>
        </form>
        </div>
      )
}

