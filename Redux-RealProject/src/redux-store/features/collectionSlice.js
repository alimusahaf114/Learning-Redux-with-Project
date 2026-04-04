import {createSlice} from "@reduxjs/toolkit"
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

        },
        clearCollection:(state , action)=>{

        }
    }

})