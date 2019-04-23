import React, { Component } from 'react';

import fineActsLogo from '../common/fine-acts-logo.png';
import openSocietyLogo from '../common/open-society-foundations-vector-logo.png';

class Footer extends Component {
    render() {
        return (
            <footer style={{'backgroundColor': 'gray'}}>
                <div className="container">
                    <p>Как протече фалшивото ти парти? Изпрати ни снимки и ни разкажи на: hello@fineacts.co</p>
                    <div className="row">
                        <div className="col-md-4">
                            <img style={{ 'maxWidth': '50px' }} src={fineActsLogo} alt="Fine Acts logo" />
                        </div>
                        <div className="col-md-8">
                            <img style={{ 'maxHeight': '50px' }} src={openSocietyLogo} alt="Open Society logo" />
                            <p>The project is supported in part by a grant from the Foundation Open Society Institute in cooperation with the Human Rights Initiative of the Open Society Foundations</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;