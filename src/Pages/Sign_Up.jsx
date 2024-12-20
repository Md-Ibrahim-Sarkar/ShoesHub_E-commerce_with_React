import React, { useContext, useState } from 'react'
import Button from '../Components/Button'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, updateProfile } from 'firebase/auth'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

function Sign_Up() {
    const { createUser, showPassword,setUser, setShowPassword, err, setErr,signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const SubmitHandle = (e) => {
        e.preventDefault()


        const email = e.target.email.value
        const password = e.target.password.value
        const term = e.target.term.checked
        const name = e.target.name.value
        const photo = e.target.photo.value

        // check if terms and conditions are accepted
        if (!term) {
            setErr('Please accept the terms and conditions');
            return;
        }

        // reset error message
        setErr('')

        // validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (password.length < 6) {
            setErr('Password must be at least 6 characters long');
            return;
        }

        if (!passwordRegex.test(password)) {
            setErr('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
            return;
        }


        // validate email
        const emailRegex = /^[a-zA-Z._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]$/;
        if (emailRegex.test(email)) {
            setErr('Invalid email address provided');
            return;
        }

        // sign in user with email and password
        createUser(email, password)
            .then((result) => {
                e.target.reset()

                sendEmailVerification(auth.currentUser)
                    .then((result) => {

                        setErr('Email verification sent! please verify your email');
                    }).catch(err => {
                        setErr('Failed to send email verification');
                    })

                const obj = {
                    displayName: name, photoURL: photo
                }

                updateProfile(auth.currentUser, obj)
                    .then((result) => {
                        console.log('User profile updated successfully', result);
                    }).catch((error) => {
                        setErr(error.message);
                    })
            }).catch((error) => {
                setErr(error.message);
            })
    }

    const GoogleProvider = new GoogleAuthProvider();

    const signUpWithGoogleHandler = () => { 
        console.log('ok');
        
        signInWithGoogle(GoogleProvider)
            .then((result) => {
                setUser(result.user)
                navigate('/')
                
            }).catch((error) => {
                console.error('Error signing in with Google:', error);
             })
    }

    const eyeToggleForPasswordShow = () => {
        setShowPassword(!showPassword);
    }

    return (
        <section className="py-8 bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 pb-8 mx-auto lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up for an account
                        </h1>
                        <div class="flex flex-col items-center">
                            <button onClick={signUpWithGoogleHandler}
                                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div class="bg-white p-2 rounded-full">
                                    <svg class="w-4" viewBox="0 0 533.5 544.3">
                                        <path
                                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                            fill="#4285f4" />
                                        <path
                                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                            fill="#34a853" />
                                        <path
                                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                            fill="#fbbc04" />
                                        <path
                                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                            fill="#ea4335" />
                                    </svg>
                                </div>
                                <span class="ml-4">
                                    Sign Up with Google
                                </span>
                            </button>

                            <button
                                class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                <div class="bg-white p-1 rounded-full">
                                    <svg class="w-6" viewBox="0 0 32 32">
                                        <path fill-rule="evenodd"
                                            d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                                    </svg>
                                </div>
                                <span class="ml-4">
                                    Sign Up with GitHub
                                </span>
                            </button>
                        </div>
                        <div class="my-12 border-b text-center">
                            <div
                                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                Or sign up with e-mail
                            </div>
                        </div>
                        <form onSubmit={SubmitHandle} className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type='text' name='name' className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" />

                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                <input type='text' name='photo' className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required="" />

                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type='email' name='email' className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />

                            </div>
                            <div className='relative'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                <button onClick={eyeToggleForPasswordShow} type='button' className='absolute cursor-pointer top-11 right-4'>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}

                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input name='term' id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Please checked our term</label>
                                    </div>
                                </div>

                            </div>
                            {err && <p className='text-red-500'>{err}</p>}
                            <Button className='bg-main-color' >Sign in</Button>
                            <Link to={'/log-in'} className="block text-sm font-light text-gray-500 dark:text-gray-400">
                                Do you have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log In</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sign_Up