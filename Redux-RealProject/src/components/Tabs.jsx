import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux-store/features/searchSlice";

const Tabs = () => {
    const tabs = ['Photos' , 'Videos' ,'GIF']
    const dispatch = useDispatch()
   const activeTab =  useSelector((state)=>{
        return state.search.activeTab
    })
    
  return (
    <div className="flex gap-5 p-10">
      {
        tabs.map((tab , idx)=>{
           return  <button 
           onClick={()=>{
            dispatch(setActiveTabs(tab))
           }}
           className={`${activeTab == tab ? 'bg-blue-600':'bg-gray-600'} transition cursor-pointer active:scale-95 px-5 py-2 uppercase rounded`} 
           key={idx}
           >{tab}
           </button>
            
        })
      }
    </div>
  );
}

export default Tabs;
