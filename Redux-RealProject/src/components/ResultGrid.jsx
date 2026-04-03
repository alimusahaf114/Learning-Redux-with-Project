import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setError,
  setLoading,
  setResults,
} from "../redux-store/features/searchSlice";
import { useEffect } from "react";
const ResultGrid = () => {
    const dispatch = useDispatch()
  const { query, loading, activeTab, result, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
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
                src:item.urls.full

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
                src:item.video_files[0].link

            }
        ))
        console.log(data);
      } 
        } catch (err) {
            dispatch(setError(err))
            console.log(err);
            
        }
      
    };
    getData()
  }, [query, activeTab]);
  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>
  return (
    <div>
    </div>
  );
};

export default ResultGrid;
