import React from 'react'
import { useSelector } from 'react-redux';
// import store from '../utils/store.js';

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>

      <h1 className='font-bold'>Home</h1>
      <h1 className='font-bold'>shorts</h1>
      <h1 className='font-bold'>Subscriptions</h1>

      <h1 className='mt-5 font-bold'>Explore</h1>
      <ul>
        <div className='ml-2'>
        <li>
          Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
        </div>
      </ul>
      <h1 className='mt-5 font-bold'>You</h1>
      <ul>
        <div className='ml-2'>
        <li>
          Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
        </div>
      </ul>
    </div>
  )
};

export default SideBar