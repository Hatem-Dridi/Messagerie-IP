import React from 'react';
import logo from "../assets/hawky.png";

function NavBar() {
    return (
        <div className='flex justify-around items-center py-6 bg-navbg sticky top-0'>
            <div className='flex items-center'>
                <img className='w-8 rounded-full object-cover' src={logo} alt="logo" />
                <h2 className='text-2xl'>Hawky</h2>
            </div>

            <div className='flex items-center gap-6'>
                <button className='bg-login text-gray-600 px-4 py-2 rounded-lg font-bold drop-shadow-2xl active:scale-75 duration-300'>Login</button>
                <button className='bg-register text-gray-600 px-4 py-2 rounded-lg font-bold drop-shadow-2xl active:scale-75 duration-300'>Register</button>
            </div>
        </div>
    );
}

export default NavBar;