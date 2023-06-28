import React from 'react'
import { Footer, Features, Ancap, Header } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Ancap />
        <Features />
        <Footer />
    </div>
);

export default App;