import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdHeadset } from 'react-icons/md'
import { BsBook } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'



const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav)
    console.log('jalan');
  }


  return (

    <div className="Container w-[100%] h-16 flex items-center justify-between p-4 ">
      <div className="Logo">
        <Link to={'/'}><h1 className="font-bold">BOOKS</h1></Link>
      </div>
      <div className="Double-button gap-4 hidden md:flex">
        <button className=' flex items-center gap-1'>
          <BsBook />
          Books
        </button>

        <button className='flex items-center gap-1'>
          <MdHeadset />
          AudioBooks
        </button>
      </div>
      <div className="Profile-icon hidden md:flex gap-1 items-center">

        <Link to={'/account'}> <CgProfile className='w-[30px] h-[20px]' /></Link>
        <Link to={'/signin'}><button>
          Login
        </button></Link>
      </div>
      <div onClick={handleClick} className='md:hidden z-50 duration-75 ease-in'>
        {!nav ? <FaBars size={25} /> : <FaTimes className="bg-white z-50 absolute right-5 top-5" size={25}
        />}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-2 z-10 text-white'}>
          <li className='py-6 text-4xl'><a href="">Books</a></li>
          <li className='py-6 text-4xl'><a href="">AudioBooks</a></li>
          <li className='py-6 text-4xl'><Link to={'/account'}>Account</Link></li>
          <li className='py-6 text-4xl'><Link to={'/signin'}><button>
            Login
          </button></Link></li>

        </ul>











      </div>













    </div>

  )
}

export default Navbar