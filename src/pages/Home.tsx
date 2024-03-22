import Background from '../assets/images/food-background.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import NestedModal from '../components/Modal'





function Home() {
  return (
    <div
    style={{ backgroundImage : `url(${Background})`}}
    className='flex flex-row place-items-center col-auto justify-center mx-auto bg-cover bg-fixed'> 
    <div className='flex flex-col justify-center place-items-center h-screen'>
        <h1 className='p-6 bg-white bg-opacity-50 text-black rounded font-semibold text-xl mb-3'>
            Whats your next meal?</h1>
        <button className='p-1 rounded bg-green-600 hover:bg-green-500  shadow text-white hover:underline hover:text-white'>
        <Link to='/Select'>Get Started</Link>
        </button>
    </div>
    </div>
    
  )
}

export default Home
