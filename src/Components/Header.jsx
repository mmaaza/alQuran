import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {db} from '../firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Header() {
  const navi = useNavigate();
  const [pageState, setpageState] = useState("Sign In")
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setpageState("Profile")
      }
      else {
        setpageState("Sign In")
      }
    })
  })
  return (
    <>
    <div className='bg-[#008DDA] py-2 flex md:space-x-60 text-white text-center px-2 font'>
     <div className='text-white md:text-xl cursor-pointer md:inline-block hidden' onClick={() => navi('/')}>
      Logo here
     </div>
      <div className='md:mr-10 mr-3'>
        <ul className='flex md:space-x-6 md:text-xl space-x-2'>
          <li className='font cursor-pointer hover:scale-110 hover:duration-150 transition-all' onClick={() => navi("/")}>Home</li>
          <li className='font cursor-pointer hover:scale-110 hover:duration-150 transition-all' onClick={() => navi("/surah")}>Surah</li>
          <li className='font cursor-pointer hover:scale-110 hover:duration-150 transition-all' onClick={() => navi("/juz")}>Juz</li>
          <li className='font cursor-pointer hover:scale-110 hover:duration-150 transition-all' onClick={() => navi("/ayah")}>Ayah</li>
          <li className='font cursor-pointer hover:scale-110 hover:duration-150 transition-all' onClick={() => navi("/quran")}>Quran</li>
        </ul>
      </div>
      <div className='md:flex items-center space-x-1 hidden'>
        <input type='text' placeholder='Search' className='p-1 rounded-md outline-none text-gray-500'/>
        <IoSearch className='text-white text-2xl cursor-pointer'/>
      </div>
      <div className='flex space-x-1 items-center cursor-pointer' onClick={() => navi("/profile")}>
        <p className='inline-block md:hidden'> | </p>
        <p className='md:text-xl'>{pageState}</p> <FaUser className='text-white md:text-xl cursor-pointer'/>
      </div>
    </div>
    </>
  )
}
