import React from 'react';

const SearchBar = () => {
  return (
    <div>
     <form className='flex p-10'>
        <input 
        className='border-2 px-10 py-2 rounded'
        type="text" placeholder='Search Anything....' />
        <button>Search</button>
     </form>
    </div>
  );
}

export default SearchBar;
