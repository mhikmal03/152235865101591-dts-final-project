import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Navbar from './mainscreen/Navbar';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate()


  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  }


  return (
    <div>
      
      <Navbar />

      <div className='max-w-[600px] mx-auto my-16 p-4 bg-cyan-800'>
        <h1 className='text-2xl font-bold py-4'>Account</h1>
        <p>User email: {user && user.email} </p>
        <button onClick={handleLogout} className='px-6 py-2 border my-4'>logout</button>
      </div>
    </div>
  )
}

export default Account