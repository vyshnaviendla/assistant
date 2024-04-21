import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import SearchBar from './Components/SearchBar';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/Aboutus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'react-chatbot-kit/build/main.css'
import General from './Components/General';
import Work from './Components/Work';
import Business from './Components/Business';
import Tax from './Components/Tax';
import Kyw from './Components/Kyw';
import Family from './Components/General';
import ChatBOT from './Components/ChatBot';
import Features from './Components/Features';
import Login from './Components/Login';
import Signup from './Components/Signup';
function Home() {
  return (
    <div className='content'>
      <SearchBar />
      <Cards />
    </div>
  );
}


function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/Contactus" element={<ContactForm/>}/>
          <Route path="/Aboutus" element={<AboutUs/>}/>
          <Route path="/General" element={<General/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Business" element={<Business/>}/>
          <Route path="/Family" element={<Family/>}/>
          <Route path="/Tax" element={<Tax/>}/>
          <Route path="/Kyw" element={<Kyw/>}/>
          <Route path="/ChatBot" element={<ChatBOT/>}/>
          <Route path="/Features" element={<Features/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
