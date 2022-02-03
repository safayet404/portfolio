import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';

import WhatIDo from '../whatIDo/WhatIDo';
import Footer from '../footer/Footer';
class FeaturesPage extends Component {
    render() {
        return (
            <Fragment>

            <TopNav/>
         
            <WhatIDo/>
            <Footer />
         
            
        </Fragment>
        );
    }
}

export default FeaturesPage;