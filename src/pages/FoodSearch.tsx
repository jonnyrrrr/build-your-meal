
import { fetchFacts } from '../api/serverCalls'
import { Link } from 'react-router-dom'


const FoodSearch = () => {

    

  return (
    <div
    className='flex flex-col p-4 justify-center items-center font-semibold '> 
    <button className='mr-96 pr-96 text-green-500'> <Link to='/Select'> <i class="fa-solid fa-arrow-left"></i> Back</Link></button>
    <h1 className='pr-3'> Search here: <i className="fa-solid fa-magnifying-glass"></i> <input type="text" className='border-2 border-gray-300' id='search' placeholder='ex. Ground Beef' /> </h1>
    <button id='btn1' className='mt-6 bg-green-600 p-1 shadow rounded border-2 border-black text-white' onClick={fetchFacts}>Search</button>

    
    <ul id='nutrition' className=''></ul>
    <ul id='nutrition2' className=''></ul>
    <ul id='nutrition3' className=''></ul>
    <ul id='nutrition4' className=''></ul>
    <ul id='nutrition5' className=''></ul>
    <ul id='nutrition6' className=''></ul>
    <ul id='nutrition7' className=''></ul>
    </div>
  )
}

export default FoodSearch
