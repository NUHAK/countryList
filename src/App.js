import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import CountryList from './components/CountryList';
import Footer from './components/Footer';

function App() {
  const [selectedContinent, setSelectedContinent] = useState('All'); // default is All

  return (
    <div>
      <Header selectedContinent={selectedContinent} setSelectedContinent={setSelectedContinent} />
      <CountryList selectedContinent={selectedContinent} />
      <Footer />
    </div>
  );
}

export default App;
