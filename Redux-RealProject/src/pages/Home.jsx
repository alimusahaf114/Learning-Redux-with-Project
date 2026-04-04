import React from 'react';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import ResultGrid from '../components/ResultGrid';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
    <Navbar />
      <SearchBar/>
      <Tabs />
      <ResultGrid />
    </div>
  );
}

export default Home;
