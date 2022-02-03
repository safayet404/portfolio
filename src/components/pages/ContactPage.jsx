import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';

import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
class ContactPage extends Component {
    render() {
        return (
            
            <Fragment>

            <TopNav/>
           
            <Contact/>
            <Footer />
            
        </Fragment>
        );
    }
}

export default ContactPage;