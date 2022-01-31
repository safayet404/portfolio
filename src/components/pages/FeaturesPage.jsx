import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';

import WhatIDo from '../whatIDo/WhatIDo';

class FeaturesPage extends Component {
    render() {
        return (
            <Fragment>

            <TopNav/>
         
            <WhatIDo/>
         
            
        </Fragment>
        );
    }
}

export default FeaturesPage;