import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from './Pages/Blog.js'
import About from './Pages/About.js'
import Contacts from './Pages/Contacts.js'
import Home from './Pages/Home.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
