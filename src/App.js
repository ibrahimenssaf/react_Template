import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Links from './Components/Indexes/Links';
import { Work } from './Components/Work/Work';
import { Contact } from './Components/Contact/Contact';
class App extends Component {
 
  render () {
    return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Links/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        
      </BrowserRouter>
          
     
    )
  }
}

export default App;




