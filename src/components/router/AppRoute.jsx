import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FeaturesPage from '../pages/FeaturesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ResumePage from '../pages/ResumePage';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage';
class AppRoute extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/do" element={<FeaturesPage/>} />
                    <Route path="/portfolio" element={<PortfolioPage/>} />
                    <Route path="/resume" element={<ResumePage/>} />
                    <Route path="/price" element={<PricingPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                </Routes>
                
            </div>
        );
    }
}

export default AppRoute;