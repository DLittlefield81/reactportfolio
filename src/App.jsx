import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/elements';
import {About, Portfolio,Stack,Contact,Resume} from './components/pages';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './components/styles/Styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router basename='/reactportfolio'>

        <div>
          <Header />
          <Routes>
            <Route strict exact path='/' element={<About />} />
            <Route path='/portfolio/' element={<Portfolio />} />
            <Route path='/stack/' element={<Stack />} />
            <Route path='/contact/' element={<Contact />} />
            <Route path='/resume/' element={<Resume />} />
            <Route path='*' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>


  )
}

export default App;