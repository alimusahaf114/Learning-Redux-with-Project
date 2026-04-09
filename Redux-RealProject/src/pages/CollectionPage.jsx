import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux-store/features/collectionSlice";
const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch()
  const clearAll=()=>{
      dispatch(clearCollection())
  }
  return (
    <div>
      <Navbar />
      <SearchBar/>
      <div>
      <div className=" flex justify-between overflow-auto px-10 py-6">
        <h2 className="text-xl font-medium ">Your Collection</h2>
        <button onClick={()=>{
          clearAll()
        }} className=" cursor-pointer bg-red-600 px-5 py-2 text-base font-medium rounded">Clear</button>
      </div>
      <div className="flex w-full justify-center flex-wrap gap-5">
      {collection.map((item, idx) => {
        return (
          <div key={idx}>
            <CollectionCard item={item}/>
          </div>
        );
      })}
      </div>
      </div>
    </div>
  );
};

export default CollectionPage;
