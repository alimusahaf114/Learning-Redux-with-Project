import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' flex justify-between item-center py-6 px-10 bg-gray-400]'>
            <h1 className='font-medium text-2xl'>MediaSearch</h1>
            <div className='flex gap-4 item-center'>
                <Link to="/">Home</Link>
                <Link to="/collection">Collection</Link>
            </div>
        </div>
  );
}

export default Navbar;
