import React, { createContext, useContext, useEffect, useState } from 'react'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from 'firebase/auth'
import { auth } from '../firebase';


const userContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return (
            createUserWithEmailAndPassword(auth, email, password)
        )
    }

    const logout = () => {
        return signOut(auth);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }





    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=> {
            console.log(user)
            setUser(currentUser);
        })
        return () => {
            unsubcribe();
        }
    }, [])



    return (
        <userContext.Provider value={{createUser, user, logout, signIn}}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(userContext);
}