import React from 'react';
import loginImg from "../assets/login1.jpg"

export default function Login(){
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
          <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />    
          </div>  
            
          <div className='bg-white flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-200 p-8 px-8 rounded lg'>
                <h2 className='text-4x1 text-gray-800 font-bold text-left'>SIGN IN</h2>
                <div className='flex flex-col text-gray-800 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-white mt-2 p-2 focus:border-gray-100 focus:bg-gray-200' type="text" />
                </div>
                <div className='flex flex-col text-gray-800 py-2'>
                    <label>Password</label>
                    <input className='rounded-lg bg-white mt-2 p-2 focus:border-gray-100 focus:bg-gray-200' type="password" />
                </div>
                <div className='flex justify-between text-gray-800 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password?</p>
                </div>
                <button className='w-full my-5 py-2 rounded-lg bg-indigo-600 shadow-lg text-white'>Sign In</button>
            </form>    
          </div>
        </div>
    )
}
