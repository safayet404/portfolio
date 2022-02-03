import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';
import Footer from '../footer/Footer';
import Portfolio from '../portfolio/Portfolio';
class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>

            <TopNav/>
           
            <Portfolio/>
            <Footer />
           
            
        </Fragment>
        );
    }
}

export default PortfolioPage;