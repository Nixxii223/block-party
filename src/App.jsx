import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const [showHeader] = useState(true);;

  return (
    <>
      {showHeader && <Header />}
      
      <Outlet />
    </>
  );
}

export default App
