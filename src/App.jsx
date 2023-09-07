import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Work from './components/Work';
import Project from './components/Project';
import Page from './components/Page';
import Contact from './components/Contact';

function App() {
  console.log('Navbar component imported successfully'); // Add this line
  return (
    <div>
      <Navbar />
      <Main />
      <Page />
      <Work />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
