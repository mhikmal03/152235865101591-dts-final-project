import React from 'react'
import Account from '../components/Account'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'
import MainScreen from '../components/mainscreen'

const Window = () => {
    return (
        <div>
            
            <AuthContextProvider>
                <Routes>
                    <Route path='/' element={<MainScreen />}                       />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />

                </Routes>
            </AuthContextProvider>
        </div>
    )
}

export default Window