import React, { useState } from 'react';
import { add, decrement, increment } from './store/features/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  const [num , setNum] = useState()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())
      }>Increment</button>
      <button
      onClick={()=>{
        dispatch(decrement())
      }}
      >Decrement</button>
      
      <input 
      type={num} 
      onChange={(e)=>{
        setNum(Number(e.target.value))
      }}
       style={{"width": "140px" , "marginLeft": "20px"}}/>
       <button onClick={()=>{
        dispatch(add(num))
      }}>Add</button>
    </div>
  );
}

export default App;
