import './App.css';
import Navbar from './components/Navbar.tsx';

import { useState, useEffect } from 'react';
import SearchStock from './components/SearchStock.tsx';
import SearchStockResult from './components/SearchStockResult.tsx';

export default function App() {
  const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;
  const user = 'userboy';
  const [ entries, setEntries ] = useState([]);

  async function getEntries() {
    try {
      const response = await fetch(`http://localhost:${SERVER_PORT}/portfolio/${user}`);
      const json = await response.json();
      setEntries(json);
    } catch (err) {
        console.log(err);
    }
  }

  useEffect(() => {
    console.log("Using effect")
    async function getEntries() {
      try {
        const response = await fetch(`http://localhost:${SERVER_PORT}/portfolio/${user}`);
        const json = await response.json();
        setEntries(json);
      } catch (err) {
          console.log(err);
      }
    }

    getEntries();
  }, []);

  console.log(entries);

  return (
    <div>
      <nav className="mb-10"><Navbar /></nav>
      <div className="flex justify-center">
        <SearchStock />
      </div>/
    </div>
  )
}

export default App;