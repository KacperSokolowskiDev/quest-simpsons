import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteForm/>
      <QuoteList/>
    </div>
  );
}

export default App;
