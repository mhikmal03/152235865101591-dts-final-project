import { Link, useNavigate } from 'react-router-dom'
import React, { useState }from 'react'
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
    const navigate = useNavigate();
    const {signIn} = UserAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        navigate('/account');
        try{
            await signIn (email, password);
        } catch (e) {
            console.log(e.message)
        }
    }



  return (
    <div className='max-w-[700px] mx-auto my-16 py-4'>
            <div>
                <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
                <p className='py-2'>Make an account? <Link to='/signup' className='underline'> Sign up. </Link> </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='font-medium py-2' >Email Adress</label>
                    <input onChange={(event) => setEmail(event.target.value)} className='border p-3' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='font-medium py-2'>Password</label>
                    <input onChange={(event) => setPassword(event.target.value)} className='border p-3' type="password" />
                </div>
                <button className='py-2 px-4 bg-blue-600 rounded-md text-white border border-blue-500
                 hover:bg-blue-700 w-full mt-4'>Sign in</button>
            </form>
        </div>
  )
}

export default Signin