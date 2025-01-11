import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import TouristSpots from './components/TouristSpots';
import FoodAndBeverages from './components/FoodAndBeverages';
import Hotels from './components/Hotels';
import Others from './components/Others';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Front Page</Link></li>
                        <li><Link to="/tourist-spots">Tourist Attractions</Link></li>
                        <li><Link to="/food-and-beverages">Food and Beverages</Link></li>
                        <li><Link to="/hotels">Hotels</Link></li>
                        <li><Link to="/others">Others</Link></li>
                    </ul>
                </nav>
                <h1>Welcome to Penang!</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tourist-spots" element={<TouristSpots />} />
                    <Route path="/food-and-beverages" element={<FoodAndBeverages />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/others" element={<Others />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
