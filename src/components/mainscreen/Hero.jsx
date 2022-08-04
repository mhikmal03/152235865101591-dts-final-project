import React, { useState, useEffect } from 'react'
import image from '../mainscreen/books.png'
import axios from 'axios'
import BooksCards from './BooksCards';
import Card from './Card';


const Hero = () => {
  

  return (
    <>
      <div className="Container w-[100%] h-[80vh] flex items-start md:items-center flex-col md:flex-row justify-center mb-5">
        <div className="left inline-block p-4 md:ml-6 mt-10 md:mt-0">
          <h1 className='text-4xl font-bold'>Find the book <br />
            your're looking for <br />
            easier to read.
          </h1>
          <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, debitis!</p>
          <div className="flex justify-start ">
            <div className="">
              <div className="flex">
                <input type="text" placeholder="Enter Your Book Name"
                   className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " aria-label="Search" aria-describedby="button-addon3" />
                <button class="btn inline-block px-6 py-2 border-2 bg-[#90bf7a]  text-white font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right px-5 flex ">
          <img src={image} alt="books" className='w-[800px] h-[500px] object-cover hidden md:flex' />
        </div>
      </div>
      

    </>
  )
}

export default Hero