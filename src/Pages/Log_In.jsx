import React, { useContext, useState } from 'react'
import Button from '../Components/Button'
import { auth } from '../firebase/firebase.init'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { AuthContext } from '../context';

function Log_In() {
  const navigate = useNavigate()
  const {signIn,resetPassword,showPassword,setShowPassword ,err, setErr,setUser}= useContext(AuthContext)
 

  const forgetPasswordRef = useRef()


  const SubmitHandle = (e) => {
    e.preventDefault()


    const email = e.target.email.value
    const password = e.target.password.value





    // reset error message
    setErr('')

    // sign in with email and password
    signIn(email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          setErr('email verification failed ')
          console.log('context ok');
          setUser(null)
          return;
        } else {
          setUser(result.user)
          navigate('/')
        }
        
        console.log(result);
        e.target.reset()
      })
      .catch((error) => {
        console.error('Error signing in with email and password:', error);
        setErr(error.message)
      });
  }

  // TODO: implement password reset functionality
  const forgetPassword = () => {
    const email = forgetPasswordRef.current.value;
    if (email) {

      resetPassword(email)
        .then(() => {

          console.log('password reset email sent');

        }).catch(err => {
          console.log(err);
        })

    }

  }

  const eyeToggleForPasswordShow = () => {
    setShowPassword(!showPassword);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in to your account
            </h1>
            <form onSubmit={SubmitHandle} className="space-y-4 md:space-y-6">
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input ref={forgetPasswordRef} type='email' name='email' className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />

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
                    <input name='remember' id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a onClick={forgetPassword} className="text-sm font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              {err && <p className='text-red-500'>{err}</p>}
              <Button className='bg-main-color' >Sign in</Button>
              <Link to={'/sign-up'} className="block text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Log_In