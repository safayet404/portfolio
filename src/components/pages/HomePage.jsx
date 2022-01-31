import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';
import Home from '../home/Home';
import WhatIDo from '../whatIDo/WhatIDo';
import Portfolio from '../portfolio/Portfolio';
import AllCards from '../DesignCard/AllCards';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';


class HomePage extends Component {
    render() {
        return (
            <Fragment>

                <TopNav/>
                <Home/>
                <WhatIDo/>
                <Portfolio/>
                <AllCards/>
                <Pricing/>
                <Contact/>
                
            </Fragment>
        );
    }
}

export default HomePage;