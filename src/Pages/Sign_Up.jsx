import React, { useState } from 'react'
import Button from '../Components/Button'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Sign_Up() {

    const [showPassword, setShowPassword] = useState(false);
    const [err, setErr] = useState('')

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
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
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
                    console.log('User profile updated successfully',result);
                }).catch((error) => {
                    setErr(error.message);
                })
            }).catch((error) => {
                setErr(error.message);
            })
    }

    const eyeToggleForPasswordShow = () => {
        setShowPassword(!showPassword);
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 pb-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up for an account
                        </h1>
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
                                <button onClick={eyeToggleForPasswordShow} type='button' className='absolute top-11 right-4 cursor-pointer'>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}

                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input name='term' id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Please checked our term</label>
                                    </div>
                                </div>

                            </div>
                            {err && <p className='text-red-500'>{err}</p>}
                            <Button className='bg-main-color' >Sign in</Button>
                            <Link to={'/log-in'} className="text-sm block font-light text-gray-500 dark:text-gray-400">
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