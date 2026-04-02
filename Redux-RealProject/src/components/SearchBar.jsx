import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux-store/features/searchSlice";

const SearchBar = () => {
    const [text , useText ] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
         e.preventDefault()
         dispatch(setQuery(text))
         useText('')      
             }
  return (
    <div>
     <form onSubmit={submitHandler} className='flex bg-gray-900 gap-5 p-10'>
        <input 
        value={text}
        onChange={(e)=>{
            useText(e.target.value);            
        }}
        required
        className=' w-full border-2 px-10 py-2 rounded outline-none'
        type="text" placeholder='Search Anything....' />
        <button className='active:scale-95 border-2 cursor-pointer px-10 py-2 rounded outline-none'>Search</button>
     </form>
    </div>
  );
}

export default SearchBar;
