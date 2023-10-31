// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Logo from './component/Header/Logo';
import Generations from './component/Header/Generations';
import Card_info from './component/Home/Card_info';
import Search from './component/Home/Search';

const App = () => {
  return (
    <>
      <Header title= "Header"/>
      <Home title= "Home"/>
      <Footer title = "Footer"/>
      <Logo title= "Logo"/>
      <Generations title = "Generations"/>
      <Gen1 title = "Gen1" />
      <Gen2 title = "Gen2" />
      <Gen3 title = "Gen3" />
      <Gen4 title = "Gen4" />
      <Search title = "Search" />
      <Card_info title = "Card Info" />
    </>
  );
};

export default App
