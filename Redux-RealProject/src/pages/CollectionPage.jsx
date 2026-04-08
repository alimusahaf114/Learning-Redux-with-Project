import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import CollectionCard from "../components/CollectionCard";
const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  return (
    <div>
      <Navbar />
      <SearchBar/>
      <div>
      <div className=" flex justify-between overflow-auto px-10 py-6">
        <h2 className="text-xl font-medium ">Your Collection</h2>
        <button className="bg-red-600 px-5 py-2 text-base font-medium rounded">Clear</button>
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
