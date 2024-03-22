import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { auth, Providers } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'


function Navbar() {

    const [isVisible, setIsVisable] = useState(false)
 

  const dropDown = () => {
    setIsVisable(!isVisible)
  }


  const clicked = () => {
    setIsVisable(false)
  }

  const signOutOnClick =() => {
    signOut(auth)
    localStorage.removeItem("isSignedIn")
    location.reload
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google)
    if (response.user ){
        localStorage.setItem("isSignedIn", "true")
        location.reload()
    }
  }
  

  return (
    <nav className='flex items-center justify-between flex-wrap bg-green-600 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/' className='font-semibold text-xl  tracking-tight border-white p-3 m-5 border-2 '>Build Your Meal</Link>
        </div>
        <div className='block'>
            <button
            onClick={dropDown}
             className="flex items-center px-6 py-2 text-white border rounded border-white 
            hover:text-slate-700 hover:border-slate-700">
                
            <i className="fa-solid fa-bars"></i>
            
            </button>
        </div>
        { isVisible ? (
            
            <div className='w-full block flex-grow items-center'>
                
                <div className="text-sml lg:flex-grow">
                    <Button className='p-3 m-5 bg-green-500 border-white border-2 justify-center text-white'>
                        <div>
                            
                             <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 hover:underline lg:inline-block lg:mt-0 
                            text-white hover:text-green-300 mr-4'>
                                Home
                            </Link> 
                        </div>
                    </Button>
                    <Button className='p-3 m-5 bg-green-500 border-white border-2 justify-center text-white'>
                        <div>
                            <Link to='/About' onClick= { clicked }className='flex place-items-center hover:underline mt-4 lg:inline-block lg:mt-0 
                            text-white hover:text-green-300 mr-4'>
                                About Us
                            </Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 bg-green-500 border-white border-2 justify-center text-white'>
                        <div>
                            <Link to='/contact' onClick={ clicked } className='flex place-items-center hover:underline mt-4 lg:inline-block lg:mt-0
                            text-white hover:text-green-300 mr-4'>
                                Contact Us!
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ?
                        <Button className='p-3 m-5 bg-green-500 border-white border-2 text-white justify-center'>
                            <div>
                                <Link to='/Home' onClick={ () => {signInOnClick()} } className='flex place-items-center mt-4 
                                lg:inline-block lg:mt-0 text-white hover:underline hover:text-green-300'> 
                                Sign In 
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-3 m-5 bg-green-500 border-white border-2 text-white justify-center'>
                        <div>
                            <Link to='/Home' onClick={ () => {signOutOnClick()} } className='flex place-items-center mt-4 
                            lg:inline-block lg:mt-0 text-white hover:underline hover:text-green-300'> 
                            Sign Out
                            </Link>
                        </div>
                    </Button>
                    }
                    

                </div>
            </div>
            ) : (
            <></>
            )}
    </nav>
  )
}

export default Navbar

