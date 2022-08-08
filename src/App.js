import React from 'react';
import "./components/styles/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './components/styles/Styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

    <Router>
 
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<About />} ></Route>
         <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
</ThemeProvider>

    
  )
}

export default App;