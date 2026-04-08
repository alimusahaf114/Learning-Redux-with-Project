import { useDispatch, useSelector } from "react-redux";
import { addCollection, addToast } from "../redux-store/features/collectionSlice";
import { ToastContainer, toast } from 'react-toastify';

const ResultCard = ({ item }) => {
  const { activeTab } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addToast())
    
  };
  return (
    <div className=" relative w-[23vw] text-black h-80 bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank">
        {activeTab === "Photos" && (
          <img
            src={item.src}
            alt={item.thumbnal || "image"}
            className="w-full h-full object-cover"
          />
        )}

        {activeTab === "Videos" && (
          <video
            src={item.src} // depends on your API
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        )}
      </a>
      <div
        id="botom"
        className=" flex justify-between items-center gap-6 absolute bottom-0 text-white"
      >
        <p className="  capitalize">{item.title}</p>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className=" active:scale-95 bg-green-500 text-white rounded px-4 py-1 cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
