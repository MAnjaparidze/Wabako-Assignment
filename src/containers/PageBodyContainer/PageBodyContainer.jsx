import React, { Component } from 'react';
import PageBody from '../../Components/PageBody/PageBody';

import { connect } from 'react-redux';

import * as actionTypes from '../../actions/rootActions';

class PageBodyContainer extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    handleSeeCommentClick = (postId) => {
        this.props.getComments(postId);
    }

    render() {
        return (
            <PageBody
                posts={this.props.posts}
                comments={this.props.comments}
                addComment={this.props.addComment}
                handleSeeCommentClick={this.handleSeeCommentClick}
                user={this.props.user}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        comments: state.comments,
        user: state.user
    }
}

export default connect(mapStateToProps, actionTypes)(PageBodyContainer)