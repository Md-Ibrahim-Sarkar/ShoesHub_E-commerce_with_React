
import { Link, useNavigate } from 'react-router-dom';
import TopBarRight from "./TopBarRight";
import Button from '../Button';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import profile from '../../assets/Images/Profile-Pic-Demo.png'

function Navbar() {
    const { user, signOutUser } = useContext(AuthContext)
     const navigate = useNavigate()

    const LogOutHandle = () => {
        signOutUser()
            .then(() => {
                navigate('/')
            }).catch((error) => {
                // An error happened.
            });
    }
   
    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-slate-900">
            <div className="container flex flex-wrap items-center justify-between p-4 mx-auto ">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-main-color">ShoesHub</span>
                </Link>
                <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <div className="hidden ScrollNav me-4">
                        <TopBarRight className='hidden' />
                    </div>
                    {
                        user ? <div >
                            <div
                                class="px-8 max-w-sm mx-auto rounded-xl shadow-lg flex items-center gap-2 ">
                                <Link to={'/profile'}>
                                <img class="block mx-auto h-9 cursor-pointer rounded-full sm:mx-0 sm:shrink-0" src={profile} alt="Woman's Face" />
                                </Link>
                                <div class="">
                                    
                                    <button onClick={LogOutHandle} class="py-1 text-sm border font-semibold rounded-md px-2 hover:bg-main-color hover:text-black hover:scale-105">Log Out</button>
                                </div>
                            </div>
                        </div> :
                            <Link to={'/log-in'}>
                                <Button className='bg-blue-700 hover:bg-blue-500'>Log In</Button>
                            </Link>
                    }
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 font-medium text-black border rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <Link to={'/'} className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>  
                        <li>
                            <Link to={'/contact'} className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>
                        {
                            user && 
                            <li>
                            <Link to={'/order'} className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Order</Link>
                        </li>
                        }
                        {
                        
                            
                        user?.email === 'ibrahim06978@gmail.com' && 
                            <li>
                            <Link to={'/dashboard'} className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Admin</Link>
                        </li>
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar