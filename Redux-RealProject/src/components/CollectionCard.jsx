import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCollection, removeToast } from '../redux-store/features/collectionSlice';
import Msg from './Msg';

const CollectionCard = ({item}) => {
     const { activeTab } = useSelector((store) => store.search);
    const dispatch =  useDispatch()
    const removeFromCollection = (item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
    <div className=" relative w-[23vw] text-black h-80 bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank">
          <img
            src={item.src}
            alt={item.thumbnal || "image"}
            className="w-full h-full object-cover"
          />
          <video
            src={item.src} // depends on your API
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
      </a>
      <div
        id="botom"
        className=" flex justify-between items-center gap-6 absolute bottom-0 text-white"
      >
        <p className="  capitalize">{item.title}</p>
        <button
          onClick={() => {
            removeFromCollection(item)
          }}
          className=" active:scale-95 bg-green-500 text-white rounded px-4 py-1 cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  
  
}

export default CollectionCard;
