import React from 'react'
import hamburger from '../assets/hamburger.png'
import youtubeLogo from '../assets/youtubeLogo.png'
import userImage from '../assets/userImage.png'
import Notification from '../assets/notification.jpg'
import { useDispatch } from 'react-redux'
import  {toggleMenu} from '../utils/appSlice.js'

const Head = () => {
  const dispatch  = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col border-gray-400  p-3 shadow-md'>
      <div className='flex col span-1 '>
        <img 
          onClick = {() => toggleMenuHandler()}
          className='h-6 w-8 pl-2 my-3 cursor-pointer'
          src={hamburger} 
          alt="menu" 
        />
        <img 
          className='h-10 pl-4 py-2 ml-2'
          src={youtubeLogo} 
          alt ="youtube" 
        />
      </div>
      <div className='col-span-10'>
        <input 
          className='border-2 border-gray-400 rounded-l-full px-5 my-2 w-1/2'
          type="text" 
          placeholder="Search" 
        />
        <button className='rounded-r-full border-2 border-gray-400 pr-2 pl-2 bg-gray-200'>🔍</button>
      </div>
      <div className='col span-1 flex'>
      <img
         className='h-9 w-8 rounded-full pr-0 my-2 mr-2  ' 
           src={Notification} 
           alt="User" 
         />
         <img
         className='h-8 w-8 rounded-full pr-0 my-2 mr-0  ' 
           src={userImage} 
           alt="User" 
         />
      </div>
    </div>
  )
};

export default Head