import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const collectionSlice = createSlice({
    name: "collection",
    initialState:{
        items: JSON.parse(localStorage.getItem('collection')) || []
    },
    reducers:{
        addCollection:(state,action)=>{
          const alreadyExist = state.items.find(item => item.id == action.payload.id)
          
          if(!alreadyExist){
            state.items.push(action.payload);
            localStorage.setItem('collection' , JSON.stringify(state.items))
          }   
        },
        removeCollection:(state,action)=>{
          state.items = state.items.filter(
            item => item.id !== action.payload
          )
          localStorage.setItem('collection' , JSON.stringify(state.items))
        },
        clearCollection:(state , action)=>{
          state.items = []
          localStorage.removeItem('collection')
        },
        addToast:()=>{
          toast("Added to collection!")
        }
    }

})

export const  {
  addCollection,
  removeCollection,
  clearCollection,
  addToast
} = collectionSlice.actions
export default collectionSlice.reducer;