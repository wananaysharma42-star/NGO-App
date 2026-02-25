import { useState  , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Registered from './Registered'
import Search from './Search'
import Card from './Card'

function App() {
  // Initialize state with a function to check localStorage first

  let [registered, setRegistered] = useState(() => {
    let savedEvents = localStorage.getItem('registeredEvents');
    if (savedEvents) {
      return JSON.parse(savedEvents);
    } else {
      return [];
    }
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('registeredEvents', JSON.stringify(registered));
  }, [registered]);

  function registeredSet(eventObj) {
    
    // Check if we are removing
    if(eventObj.remove){
      setRegistered(registered.filter(item => item.title !== eventObj.title));
    }
      // Avoid duplicate registrations
      if (!registered.find(item => item.title === eventObj.title)) {
        setRegistered([...registered, eventObj]);
      }
  }
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home fun={registeredSet} check={registered}/>}/>
          <Route path="/Registered" element={<Registered fun={registeredSet} arr={registered}/>}/>
          <Route path="/Search" element={<Search fun={registeredSet} check={registered}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
