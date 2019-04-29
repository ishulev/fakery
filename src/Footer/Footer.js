import React, { Component } from 'react';

import fineActsLogo from '../common/fine-acts-logo.png';
import openSocietyLogo from '../common/open-society-foundations-vector-logo.png';

class Footer extends Component {
    render() {
        return (
            <footer className="p-4" style={{'backgroundColor': 'gray', 'color': '#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <p>The project is supported in part by a grant from the Foundation Open Society Institute in cooperation with the Human Rights Initiative of the Open Society Foundations</p>
                        </div>
                        <div className="col-md-4">
                            <img style={{ 'maxHeight': '50px', 'marginRight': '30px' }} src={openSocietyLogo} alt="Open Society logo" />
                            <img style={{ 'maxWidth': '50px' }} src={fineActsLogo} alt="Fine Acts logo" />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;