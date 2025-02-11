import './App.css';
import { Routes,Route } from 'react-router-dom';
import React from "react";
import Home from './Pages/HomePages/Home';
import About from './Pages/AboutPages/About';
import Map from './Pages/LocationMap/Map';
import Contact from './Pages/ContactPages/Contact';
import News from './Pages/NewsPages/News';
import NotFound from './Pages/NotFoundPages/NotFound';
import Navbar from './Layouts/Navbar/Navbar';
import Footer from './Layouts/Footer/Footer';
import Programme from './Pages/ProgrammePages/Programme';
import ScrollToTop from './Scrolle/ScrollToTop';

export default function App(){
    return(
        <>
        <div>
        <ScrollToTop/>
        </div>
        <div>
            <Navbar/>
        </div>
        <div className='Router'>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Location' element={<Map/>}/>
            <Route path='/News' element={<News/>}/>
            <Route path='/Programe' element={<Programme/>}/>
            <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div><br /><br /><br /><br />
        <div>
            <footer className='footer'>
                <Footer/>
            </footer>
        </div>
        </>
    )
}