import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';

import Portfolio from '../portfolio/Portfolio';
class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>

            <TopNav/>
           
            <Portfolio/>
           
            
        </Fragment>
        );
    }
}

export default PortfolioPage;