import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
        <nav className='px-[222px] flex justify-between py-4 shadow-lg '>
          <div className='flex items-center'>
            <h1 onClick={() => navigate('/')} className='cursor-pointer font-bold text-lg mt-2'>SpaceBlock</h1>
            <p className='px-2 h-[20px] text-[8px] py-[4px] rounded-lg ml-2 mt-2 bg-black text-white'>Consumer</p>
          </div>
          
          <button className='px-[40px] py-[10px] text-white font-semibold bg-blue-500 rounded-md'>Connect</button>
        </nav>
    </div>
  )
}

export default Navbar