import React from 'react';
import LoginLogo from "/src/assets/img/register-img.png"
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <>
      
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/** Left side image */}
             <div className="md:w-1/2 flex">
                 <img src={LoginLogo} alt="login side img" />
             </div>

             {/** Right side image */}
             <div className="md:w-1/2 p-8 flex flex-col w-full justify-center">
                 <h2 className='text-3xl text-center font-bold text-red-600 mb-6'>
                  🩸 Join as a Donor
                 </h2>

                <form className='space-y-4'>
                    {/** Email or Phone */}
                    <div>
                       <label className='block text-sm font-medium text-gray-800 mb-1'>
                        Emaill or Phone
                        </label>

                       <input type="text" placeholder='Enter Email or Phone......' className='w-full border border-gray-300 rounded-lg px-2 py-2 focus:ring-2 focus:ring-red-400 outline-none'/>
                      
                    </div>

                       {/** Password  */}

                    <div className=''>
                      <label className='block text-sm font-medium text-gray-800 mb-1'>
                        Password 
                      </label>

                      <input type="text" placeholder='Enter Your Password' className='w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-red-400 outline-none mb-3'/>
                    </div>

                 {/** submit button */}
                       <Button/>

                   {/** Already have an account */}
                    <p className='text-center text-medium text-gray-800 mt-2'> 
                       Don't have an account {""}
                      <Link to="/register" className='text-pink-800 underline'>
                        Register
                    </Link>
                    </p>
                </form>

             </div>

        </div>

      </div>
   
    </>
  )
}

export default SignIn
