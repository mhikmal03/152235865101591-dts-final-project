import { async } from '@firebase/util'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Navbar from './mainscreen/Navbar'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();


    const { createUser } = UserAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await createUser(email, password)
            navigate('/account');
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <>
            <Navbar />



            <div className='max-w-[700px] mx-auto my-16 py-4'>
                <div>
                    <h1 className='text-2xl font-bold py-2'>Sign up your account</h1>
                    <p className='py-2'>Already have an account? <Link to='/' className='underline'> Sign in. </Link></p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col py-2'>
                        <label className='font-medium py-2' >Email Adress</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-medium py-2'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
                    </div>
                    <button className='py-2 px-4 bg-blue-600 rounded-md text-white border border-blue-500
                 hover:bg-blue-700 w-full mt-4'>Sign up</button>
                </form>
            </div>
        </>
    )
}

export default Signup