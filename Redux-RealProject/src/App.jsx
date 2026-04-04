import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';

const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-gray-950'  >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
