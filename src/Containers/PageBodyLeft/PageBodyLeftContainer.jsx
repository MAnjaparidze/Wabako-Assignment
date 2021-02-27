import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/index';
import PageBodyLeft from './../../Components/PageBody/PageBodyLeft/PageBodyLeft';

class PageBodyLeftContainer extends React.Component {
    
    componentDidMount() {
        this.props.getPosts();
    }

   
    render() {

        return (
            <PageBodyLeft posts={this.props.posts} />
        )
    }

}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,actionCreators)(PageBodyLeftContainer);