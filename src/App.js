import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbers from './Components/Header/Navebar/Navbers';
import Sidebar from './Components/salider/Sidebar';
 
function App() {
  return (
     <div>
    <Header/>
    <Navbers/>
    <Sidebar/>
     </div>
  );
}

export default App;
