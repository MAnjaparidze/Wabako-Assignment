import React, { Component } from 'react'
import App from './../../App';

import { connect } from 'react-redux';
import * as actionTypes from '../../actions/rootActions';

class AppContainer extends Component {
    render() {
        return (
            <App getUser={this.props.getUser} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actionTypes)(AppContainer)