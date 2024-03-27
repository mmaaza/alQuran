import React, { useState } from 'react'
import quran from '../assets/Quran.jpg'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../Components/OAuth';
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export default function Login() {
  const navi = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const {email, password} = formData;
  function onChange(e) {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
    }))
};
 async function onSubmit(e){  
  e.preventDefault();
   try {
    const auth = getAuth();
    const userinfo = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    if(userinfo.user) {
      navi("/")
      toast.success("You have been successfully logged In")
    } else {
      toast.error("Bad user Credentials")
    }
   } catch (error) {
    toast.error("Bad user Credentials")
   }
 }

  return (
   <>
    <h1 className='text-center my-2 text-gray-700 text-2xl font'>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
     <div className=' mx-auto md:max-w-5xl shadow-xl rounded-sm font'>
       <div className='md:flex py-10'>
        <div className='p-1 flex justify-center items-center'>
          <img src={quran} alt="quran" className='rounded-md'/>
        </div>
        <div className='items-center flex justify-center w-full flex-col p-2'>
          <form className='flex flex-col space-y-5 md:w-[80%] text-sm w-full' onSubmit={onSubmit}>
          <input
                                id='email'
                                value={email}
                                type='email'
                                placeholder='Email'
                                onChange={onChange}
                                className='p-2 rounded-md outline-none border-2 border-gray-300' />
                            <input
                                id='password'
                                type='password'
                                value={password}
                                placeholder='Password'
                                onChange={onChange}
                                className='p-2 rounded-md border-2 border-gray-300' />
            <div className='flex justify-between font text-gray-700'>
            <p className='flex space-x-3 '>Don't have an account?<p className='ml-1 cursor-pointer text-blue-500'
            onClick={() => navi("/sign-up")}> Register</p></p>
            <p className='cursor-pointer text-red-500'><Link to="/resetpassword">Forgot password? </Link></p>
            </div>
            <button className='bg-[#008DDA] text-white p-2 rounded-md uppercase font-semibold'>Login</button>
          </form>   
          <div className="flex items-center my-4 before:border-t before:flex-1
                before:border-gray-600 after:border-t after:border-gray-600 after:flex-1">
                  <p className="text-center mx-4">OR</p>
                </div>
                <Auth/>
        </div>
       </div>
     </div>
   </>
  )
}
