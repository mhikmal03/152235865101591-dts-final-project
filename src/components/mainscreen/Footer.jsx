import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <>
            <footer className="text-center text-white bg-slate-500">
                <div className="Container p-6 bg-[#0a4275]">
                    <div className="">
                        <p className="flex justify-center items-center">
                            <span className="mr-4">Register for free</span>
                            <Link to={'/signup'}>
                            <button type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                Sign up!
                            </button></Link>
                        </p>
                    </div>
                </div>

                <div className="text-center p-4 bg-[#08355e]">
                    © 2022 M. Hikmal Kansha Pramudya-152235865101591-dts-final-project
                    
                </div>
            </footer>
            </>

        
    )
}

export default Footer