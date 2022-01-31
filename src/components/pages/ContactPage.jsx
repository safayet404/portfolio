import React, { Component,Fragment } from 'react';
import TopNav from '../navBar/TopNav';

import Contact from '../contact/Contact';

class ContactPage extends Component {
    render() {
        return (
            
            <Fragment>

            <TopNav/>
           
            <Contact/>
            
        </Fragment>
        );
    }
}

export default ContactPage;