import React, { Component, Fragment } from 'react';
import TopNav from '../navBar/TopNav';
import Footer from '../footer/Footer';
import AllCards from '../DesignCard/AllCards';
class ResumePage extends Component {
    render() {
        return (
            <Fragment>

                <TopNav />

                <AllCards />
                <Footer />


            </Fragment>
        );
    }
}

export default ResumePage;