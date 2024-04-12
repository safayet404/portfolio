import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';
import Home from '../home/Home';
import WhatIDo from '../whatIDo/WhatIDo';
import Portfolio from '../portfolio/Portfolio';
import AllCards from '../DesignCard/AllCards';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import About from '../about/About';

class HomePage extends Component {
    render() {
        return (
            <Fragment>

                <TopNav/>
                <Home/>
                <About/>
                <Portfolio/>
                <AllCards/>
                <Pricing/>
                <Contact/>
                <Footer/>
                <WhatIDo/>
                
            </Fragment>
        );
    }
}

export default HomePage;