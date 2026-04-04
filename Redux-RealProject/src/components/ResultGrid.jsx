import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setError,
  setLoading,
  setResults,
} from "../redux-store/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
    const dispatch = useDispatch()
  const { query, loading, activeTab, result, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
      if(!query ) return 
    const getData = async () => {
        try {
            dispatch(setLoading())
     let data=[]
      if (activeTab == "Photos") {
        let response  = await fetchPhotos(query);
        data = response.results.map((item)=>(
            {
                id: item.id,
                type: 'photo',
                title:item.alt_description,
                thumbnail: item.urls.small,
                src:item.urls.full,
                url: item.links.html

            }
            
        ))
    }
    if (activeTab == "Videos") {
        let response  = await fetchVideos(query);
        data = response.videos.map((item)=>(
            {
                id: item.id,
                type: 'video',
                title:item.user.name || 'video',
                thumbnail: item.image,
                src:item.video_files[0].link,
                url: item.url
            }
        ))
      } 
      dispatch(setResults(data))
        } catch (err) {
            dispatch(setError(err.message))
            
        }
      
    };
    getData()
  }, [query, activeTab]);
  
  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>
  return (
    <div className="flex w-full justify-center flex-wrap gap-5 px-10 overflow-auto">
        {result.map((item , idx )=>{            
            return <div key={idx} >
                <ResultCard item={item} />
                </div>
        })}
    </div>
  );
};

export default ResultGrid;
