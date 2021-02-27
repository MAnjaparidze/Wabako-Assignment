import React, { useState } from 'react'
import PageBodyRight from './PageBodyRight/PageBodyRight';
import PageBodyLeft from './PageBodyLeft/PageBodyLeft';

export default function PageBody(props) {
    const [activePost, setActivePost] = useState(null);

    return (
        <div className="container">
            <h3 className="my-4">Place for exchanging your visions</h3>
            <div className="row">
                <PageBodyLeft posts={props.posts} handleSeeCommentClick={props.handleSeeCommentClick} activePost={activePost} setActivePost={setActivePost} />
                <PageBodyRight comments={props.comments} addComment={props.addComment} user={props.user} filterPosts={props.filterPosts} />
            </div>
        </div>
    )
}
