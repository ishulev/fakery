import React, { Component } from 'react';

import { footer } from '../i18n/translations';
import fineActsLogo from '../common/fine-acts-logo.png';
import openSocietyLogo from '../common/open-society-foundations-vector-logo.png';

class Footer extends Component {
    componentWillReceiveProps(newProps) {
        footer.setLanguage(newProps.lang);
    }
    componentDidMount() {
        footer.setLanguage(this.props.lang);
        this.setState({});
    }
    render() {
        return (
            <footer style={{'backgroundColor': 'gray'}}>
                <div className="container">
                    <p>{footer.p1}</p>
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