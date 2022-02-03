import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';
import Footer from '../footer/Footer';
import Pricing from '../pricing/Pricing';


class PricingPage extends Component {
    render() {
        return (
            <Fragment>

            <TopNav/>
  
            <Pricing/>
            <Footer />
            
        </Fragment>
        );
    }
}

export default PricingPage;