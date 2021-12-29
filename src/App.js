import React from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import styled from 'styled-components';
import SideBar from './components/SideBar';

const Header = styled.div` // 1
  height: 100px;
  width: 100%;
  background: rgb(45 55 148);
  display: flex; // 2
  justify-content: center; 
`;


function App() {
  return (  
    <div className="App">  
      <Header/> 
      <SideBar/>
      <Home/>
      <Footer/>              
    </div>

  );
}

export default App;
