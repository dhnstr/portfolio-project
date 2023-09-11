import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Work from './components/Work';
import Project from './components/Project';
import Page from './components/Page';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  console.log('Navbar component imported successfully'); 
  return (
    <div>
      <Navbar />
      <Main />
      <Page />
      <Work />
      <Project />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
