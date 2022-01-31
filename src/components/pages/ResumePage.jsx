import React, { Component, Fragment } from 'react';
import TopNav from '../navBar/TopNav';

import AllCards from '../DesignCard/AllCards';
class ResumePage extends Component {
    render() {
        return (
            <Fragment>

                <TopNav />

                <AllCards />


            </Fragment>
        );
    }
}

export default ResumePage;