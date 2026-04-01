import React from 'react';
import { fetchPhotos, fetchVideos } from './api/mediaApi';

const App = () => {
  return (
    <div className='text-white h-screen w-full bg-gray-950'>
      <button onClick={async ()=>{
        const data =  await fetchPhotos('cat');
        console.log(data.results);       
        
      }}>Get Data</button>
      <button onClick={async ()=>{
        const data =  await fetchVideos('cat');
        console.log(data.videos);       
        
      }}>Get Videos</button>
    </div>
  );
}

export default App;
