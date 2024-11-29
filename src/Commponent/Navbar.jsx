import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          
          <ul className="flex space-x-8">
            <li className='relative hover:text-[#35B8FF] font-bold'>
            <NavLink to="/"><img src="src/assets/basket-01_generated.jpg" className='w-14' alt="" /></NavLink>
            </li>  
            <li className='relative hover:text-[#35B8FF] font-bold'>
            <NavLink to="/Bloga"><img src="src/assets/vecteezy_profile-icon-design-vector_5544718.jpg" className='w-14' alt="" /></NavLink>
              
            </li>
          </ul>
        </div>
      <div className='flex gap-2'>
      <input
      type="text"
      placeholder="Search"
      className="border  border-gray-300 rounded-md p-3 w-80  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
<Link to="/"><img src="src/assets/full-horizontal.svg" alt="" /></Link>
      </div>
      </nav>
    </div>
  );
}

export default Navbar;
