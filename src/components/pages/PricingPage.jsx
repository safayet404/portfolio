import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';

import Pricing from '../pricing/Pricing';


class PricingPage extends Component {
    render() {
        return (
            <Fragment>

            <TopNav/>
  
            <Pricing/>

            
        </Fragment>
        );
    }
}

export default PricingPage;